const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const hashPasswordMiddleware = async (params, next) => {
  const { data } = params;
  if (data.password && !data.isModified("password")) {
    return next();
  }

  data.password = await bcrypt.hash(data.password, 12);
  data.passwordConfirm = undefined;

  return next();
};

const correctPasswordMiddleware = async (params, next) => {
  const { data } = params;
  const userPassword = data.password;
  const candidatePassword = params.args.candidatePassword;

  return await bcrypt.compare(candidatePassword, userPassword);
};

prisma.pre("user.create", hashPasswordMiddleware);
prisma.pre("user.update", hashPasswordMiddleware);

prisma.post("user.login", correctPasswordMiddleware);

/*
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); //hash = encrypt | bcrypt = hashing algorithm
  //hash password with cost 12
  this.password = await bcrypt.hash(this.password, 12); //12 = cost parameter, it best to use 12
  //, the higher this cost,the more

  //delete pwConfirm Field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  //instance method
  return await bcrypt.compare(candidatePassword, userPassword);
};



*/
