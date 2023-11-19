const { PrismaClient } = require("@prisma/client");
const { get } = require("http");
const prisma = new PrismaClient();

exports.ratingQuantity = async (req, res, next) => {
  const getData = await prisma.rating.findMany({
    orderBy:[
      {
        id:'asc'
      }
    ]
  });

  getData.map(async (val) => {
    const stats = await prisma.rating.aggregate({
      where: { product: val.product },
      _avg: {
        rating: true,
      },
      _count: {
        rating: true,
      },
      orderBy:{
        product:"asc"
      }
    });
    await prisma.product.update({
      where: { id: val.product },
      data: {
        ratingsQuantity: stats._count.rating,
        ratingsAverage: stats._avg.rating
      },
    });
    // console.log(val.product)
    // console.log(stats._avg)
    // console.log(stats._count)

  });
  

   

   
  
  next();
};
