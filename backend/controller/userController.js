const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AppError = require('../utils/appError')


exports.getAllUser = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      include:{
        rating:true
      }
    });

    res.status(200).json({
      status: "Success",
      users,
    });
    await prisma.$disconnect();
    console.log(users);
  } catch (err) {
    console.log();
  }
};

