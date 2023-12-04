const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createData = async (req, res, next) => {
  try {
    console.log(req.body);
    const createData = await prisma.product.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        productCategory: req.body.productCategory,
      },
    });

    res.status(201).json({
      status: "Success",
      createData,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllData = async (req, res, next) => {
  const params = req.params.sort;
  console.log(params)
  if (params === 'Newest') {
    const getData = await prisma.product.findMany({
      orderBy: [
        {
          created_at: 'desc'
        }
      ]
    });
    res.header('Cache-Control', 'max-age=31536000, public');
    res.status(200).json({
      status: "success",
      getData,
    });
  }
  else if (params === 'Latest') {
    const getData = await prisma.product.findMany({
      orderBy: [
        {
          created_at: 'asc'
        }
      ]
    });
    res.header('Cache-Control', 'max-age=31536000, public');
    res.status(200).json({
      status: "success",
      getData,
    });
  } 
  else {
    const getData = await prisma.product.findMany({});
    res.header('Cache-Control', 'max-age=31536000, public');
    res.status(200).json({
      status: "success",
      getData,
    });
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
  }
};

exports.deleteData = async (req, res, next) => {
  await prisma.product.delete({
    where: {
      id: req.body.id,
    },
  });

  res.status(200).json({
    status: "success",
  });
};

exports.deleteAllData = async (req, res, next) => {
  await prisma.product.deleteMany({});

  res.status(200).json({
    status: "success",
  });
};

exports.updateData = async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body.image);

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
};
