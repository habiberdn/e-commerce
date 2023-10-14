const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AppError = require('../utils/appError')

const bcrypt = require("bcryptjs");

exports.getAllUser = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      status: "Success",
      users,
    });
    console.log(users);
  } catch (err) {
    console.log();
  }
};

exports.Register = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
   
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
      },
      
    });
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

exports.login =async (req,res,next)=>{

  const { email, password } = req.body;

  //1. Check password and email are exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
      password:password
    },
  })


  if (!user || !await correctPassword(password,user.password)){
    return next(new AppError('Incorrect email or password', 401));
  }

  console.log(user)
}
