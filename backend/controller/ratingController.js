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
exports.createData = async (req, res, next) => {
    try{
        const create = await prisma.rating.create({
            data:{
                review:req.body.review,
                rating:req.body.rating,
                user:req.body.user,
                product:req.body.product
            }
        })
        res.status(201).json({
            status: "Success",
            create,
        });
    }catch(err){
        console.log(err)
    }
}



exports.delete = async (req, res, next) => {
     await prisma.product.deleteMany({});

}