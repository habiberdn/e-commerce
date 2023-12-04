const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const sharp = require('sharp');

exports.ratingQuantity = async (req, res, next) => {
  const getData = await prisma.rating.findMany({
    orderBy: [
      {
        id: 'asc'
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
        review: true,

      },
      orderBy: {
        product: "asc"
      }
    });
    await prisma.product.update({
      where: { id: val.product },
      data: {
        ratingsQuantity: stats._count.rating,
        ratingsAverage: stats._avg.rating,
        ReviewQuantity: stats._count.review,
      },
    });
  });
  next();
};

exports.ratings = async (req, res, next) => {
  const getData = await prisma.rating.findMany({
    where: {
      product: parseInt(req.params.product)
    },
    orderBy: [
      {
        id: 'asc'
      }
    ]
  });
  res.status(200).json({
    status: "Success",
    getData
  })
}
