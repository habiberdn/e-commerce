const jwt = require("jsonwebtoken");
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const User = require('../model/user')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //receive cookie,store it, send it automatically alomg every request
  };
  if (process.env.NODE_ENV === "Production") cookieOption.secure = true;
  //remove password from the output
  user.password = undefined;

  res.cookie("jwt", token, cookieOption);

  res.status(statusCode).json({
    status: "Success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
 
  });
  createSendToken(newUser, 201, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // to protect the id and use the JWT
  //1. Getting token and check if it there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not log in, please log in to get access', 401)
    );
  }

  //2. Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET); //seeing if the payload token has not been manipulated by some malicious third party

  //3. Check if user still exist
  const currentUser = await User.findById(decoded.id); // execute when the user has delete the field
  if (!currentUser) {
    return next(
      new AppError(
        'The token belonging to this token does no longer exist',
        401
      )
    );
  }
  //4. Check if user changed password after token was issues
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('user recently change password ! Please log in again', 401)
    );
  }

  // Grand Access to protect route
  req.user = currentUser; //put stuff on req.user can pass one middleware to another middleware
  res.locals.user = currentUser;
  next();
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. Check password and email are exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  //2. Check the password and email are correct
  const user = await User.findOne({ email }).select('+password'); // + password will added password to the field but not by default

  if (!user || !(await user.correctPassword(password, user.password))) {
    //comapre postman password with in database password
    return next(new AppError('Incorrect email or password', 401));
  }
  // 3. if everything ok, send token to client
  createSendToken(user, 200, res);
});