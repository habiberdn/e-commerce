const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require('fs');

const data =JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`, 'utf8'));

exports.createData = async (req,res,next)=>{
    try {
        for (let i =0;i<data.length;i++){
          await prisma.product.create({data:{
           name:data[i].name,
           description:data[i].description,
           price:data[i].price,
           image:data[i].image
          }})
        }

        res.status(201).json({
            status:"Success",
            data
        })
      } catch (err) {
        console.error(err);
      }
}

exports.getAllData = async(req,res,next)=>{
  const getData = await prisma.product.findMany()

  res.status(200).json({
    status:'success',
    getData
  })
}