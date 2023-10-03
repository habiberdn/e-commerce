const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
    console.log(hash)
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
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
