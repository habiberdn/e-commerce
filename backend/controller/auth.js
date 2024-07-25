const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcryptjs");
const { promisify } = require('util');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED_IN
  })
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // httpOnly: true, //receive cookie,store it, send it automatically along every request
    path: '/seller',
    domain: 'localhost'
  };


  
  if (process.env.NODE_ENV === "Production") cookieOption.secure = true;

  //remove password from the output
  user.password = undefined;
  res.cookie("jwt", token, cookieOption)
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // httpOnly: true, //receive cookie,store it, send it automatically along every request
    path: '/addProduct',
    domain: 'localhost'
  })


  res.status(statusCode).json({
    status: "Success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
      },
    });

    createSendToken(user, 201, res);
    res.status(201).json({
      status: "success",
      user,
    });

  } catch (error) {
    res.status(500).json({ error });
    console.error(error)
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //1. Check password and email are exist
  if (!password) {
    return next(new AppError("Please provide email and password", 401));
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  createSendToken(user, 200, res);
});

exports.signupSeller = catchAsync(async (req, res, next) => {
  console.log(req.body)
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const emailUser = await prisma.seller.findUnique({
      where: {
        email: req.body.email
      }
    })

    if (emailUser) {
      next(new AppError('This email or username already taken! Try another', 401))
    }

    const user = await prisma.seller.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
      },
    });

    createSendToken(user, 201, res);
    res.status(201).json({
      status: "success",
      user,
    });

  } catch (error) {
    console.error(error)
    res.status(500).json({ error });
  }
});

exports.loginSeller = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //1. Check password and email are exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await prisma.seller.findUnique({
    where: {
      email: email,
    },
  });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3. if everything ok, send token to client
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // to protect the id and use the JWT  
  //1. Getting token and check if it there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not log in, please log in to get access", 401)
    );
  }
  console.log(token)
  //2. Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET); //seeing if the payload token has not been manipulated by some malicious third party
  //3. Check if user still exist

  const currentUser = await prisma.seller.findUnique({
    where: {
      id: decoded.id //id of user 
    }
  })
  if (!currentUser) {
    return next(
      new AppError(
        "The token belonging to this user does no longer exist",
        401
      )
    );
  }
  //4. Check if user changed password after token was issues

  // get value of passwordChangeAt,implement method changedPasswordAfter

  //  return next(new AppError("user recently change password ! Please log in again", 401))

  // Grand Access to protect route
  req.user = currentUser; //put stuff on req.user can pass one middleware to another middleware
  res.locals.user = currentUser;
  next();
});



