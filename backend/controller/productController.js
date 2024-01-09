const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require('multer');
let sharp = require('sharp')
const catchAsync = require('../utils/catchAsync')

const multerStorage = multer.memoryStorage();
//if u want to resize, save file into memory not into disk
const multerFilter = (req, file, cb) => {

  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadImage = upload.single('image');

exports.resizeUserPhoto = async (req, file, next) => {
  if (!req.file) {
    return next()
  }
  console.log(req.file)
  req.file.filename = `product ${req.user.id}-${Date.now()}.webp` //save file into db
  await sharp(req.file.buffer).resize(500, 500).toFormat('webp').jpeg({ quality: 90 }).toFile(`img/product/${req.file.filename}`) //after uploading file, its better to not save file in the disk instead save in memory
  req.user = req.file.filename
  next()
}

exports.createData = catchAsync(async (req, res, next) => {
  try {
    const createData = await prisma.product.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        price: parseInt(req.body.price),
        image: req.file.filename,
        productCategory: req.body.productCategory,
        stock: parseInt(req.body.stock),
        sellerName: req.body.sellerName
      },
    });

    res.status(201).json({
      status: "Success",
      createData

    });
    await prisma.$disconnect();

  } catch (err) {
    console.error(err);
  }
});

exports.getAllData = catchAsync(async (req, res, next) => {
  const params = req.params.sort;

  if (params === 'Newest' && isNaN(req.params.id)) {
    const getData = await prisma.product.findMany({
      orderBy: [
        {
          created_at: 'desc'
        }
      ],
      where: {
        productCategory: req.params.id
      }
    });
    res.header('Cache-Control', 'max-age=31536000, public'); //control cache on browser
    res.status(200).json({
      status: "success",
      getData,
    });
    await prisma.$disconnect();

  }
  else if (params === 'Latest' && isNaN(req.params.id)) {
    const getData = await prisma.product.findMany({
      orderBy: [
        {
          created_at: 'asc'
        },
      ],
      where: {
        productCategory: req.params.id
      }
    });
    res.header('Cache-Control', 'max-age=31536000, public');
    res.status(200).json({
      status: "success",
      getData,
    });
    await prisma.$disconnect();

  }
  else {
    const getData = await prisma.product.findMany({});
    res.header('Cache-Control', 'max-age=31536000, public');
    res.status(200).json({
      status: "success",
      getData,
    });
    await prisma.$disconnect();

  }

});


exports.getOne = async (req, res, next) => {
  const paramsID = req.params.id;
  if (!isNaN(paramsID)) { // a number
    const getData = await prisma.product.findUnique({
      where: {
        id: parseInt(paramsID),
      },
      include: {
        review: true,
      },

    });
    res.status(200).json({
      status: "success",
      getData,
    });
    await prisma.$disconnect();

  }

  else if (paramsID === 'Fashion' || paramsID === 'Photography' || paramsID === 'Electronic') {
    const getData = await prisma.product.findMany({
      where: {
        productCategory: paramsID,
      },
      orderBy: [
        {
          id: 'asc'
        }
      ]
    });

    res.status(200).json({
      status: "Success",
      getData,
    });

    await prisma.$disconnect();

  }
  else {
    const sellerProduct = await prisma.product.findMany({
      where: {
        sellerName: paramsID
      }
    })
    res.status(200).json({
      status: "success",
      sellerProduct,
    });
    await prisma.$disconnect();
  }
};

exports.deleteData = catchAsync(async (req, res, next) => {
  await prisma.product.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json({
    status: "success",
  });
  await prisma.$disconnect();

});

exports.deleteAllData = async (req, res, next) => {
  await prisma.product.deleteMany({});

  res.status(200).json({
    status: "success",
  });
  await prisma.$disconnect();

};

exports.updateData = catchAsync(async (req, res, next) => {

  await prisma.product.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: req.body.name,
      productCategory: req.body.productCategory,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      stock:req.body.stock,
    },
  });
  res.status(200).json({
    status: "success",
  });
  await prisma.$disconnect();

});
