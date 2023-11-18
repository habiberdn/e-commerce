const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllData = async (req, res, next) => {
    try{
        const getData = await prisma.rating.findMany({})
        res.status(200).json({
            status: "success",
            getData,
        });
    }catch(err){
        console.error(err);
    }
  };