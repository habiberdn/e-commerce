const fs = require("fs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const review = JSON.parse(fs.readFileSync(`${__dirname}/review.json`, "utf-8"));
const product = JSON.parse(
  fs.readFileSync(`${__dirname}/product.json`, "utf-8")
);

const importData = async () => {
  try {
    for (const products of product) {
      await prisma.product.create({
        data: products,
      });
    }
    
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await prisma.product.deleteMany({});
  
    console.log("Data deleted!");
  } catch (err) {}
  process.exit();
};

console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
