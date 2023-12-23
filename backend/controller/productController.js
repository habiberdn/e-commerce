const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require('multer');

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
  console.log(req.user,req.file)
  req.file.filename = `product ${req.user.id}-${Date.now()}.webp` //save file into db
  await sharp(req.file.buffer).resize(500, 500).toFormat('webp').jpeg({ quality: 90 }).toFile(`img/product/${req.file.filename}`) //after uploading file, its better to not save file in the disk instead save in memory
  next()
}

exports.createData = async (req, res, next) => {
  try {
    // const createData = await prisma.product.create({
    //   data: {
    //     name: req.body.name,
    //     description: req.body.description,
    //     price: parseInt(req.body.price),
    //     image: req.file.originalname,
    //     productCategory: req.body.productCategory,
    //     stock:parseInt(req.body.stock)
    //   },
    // });

    res.status(201).json({
      status: "Success",

    });
    await prisma.$disconnect();

  } catch (err) {
    console.error(err);
  }
};

exports.getAllData = async (req, res, next) => {
  const params = req.params.sort;
  console.log(params)
  console.log(req.params.id)

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
    console.log(req.params.id)
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

};

exports.getOne = async (req, res, next) => {
  const paramsID = req.params.id; //
  if (!isNaN(paramsID)) {
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

  } else {
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
};

exports.deleteData = async (req, res, next) => {
  await prisma.product.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json({
    status: "success",
  });
  await prisma.$disconnect();

};

exports.deleteAllData = async (req, res, next) => {
  await prisma.product.deleteMany({});

  res.status(200).json({
    status: "success",
  });
  await prisma.$disconnect();

};

exports.updateData = async (req, res, next) => {
  console.log(req.params.id);

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
    },
  });
  res.status(200).json({
    status: "success",
  });
  await prisma.$disconnect();

};
