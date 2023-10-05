
// const correctPassword = async (candidatePassword,userPassword) => {

//   return await bcrypt.compare(candidatePassword, userPassword);
// };

async function correctPassword(candidatePassword,userPassword){
  return await bcrypt.compare(candidatePassword, userPassword);
}
module.exports = correctPassword
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
