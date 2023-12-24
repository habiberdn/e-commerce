const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUser = async(req,res,next)=>{
    const user = await prisma.seller.findMany()
    res.status(200).json({
        status: 'success',
        user
    })
}