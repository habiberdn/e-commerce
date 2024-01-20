const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUser = async(req,res,next)=>{
    const user = await prisma.seller.findMany()
    res.status(200).json({
        status: 'success',
        user
    })
}

exports.updateUser = async(req,res,next)=>{
    const updateSeller = await prisma.seller.update({
        where:{
            email: req.body.email
        },
        data : {
            name : req.body.name
        }
    })
    res.status(200).json({
        status: 'success',
        updateSeller
    })
}