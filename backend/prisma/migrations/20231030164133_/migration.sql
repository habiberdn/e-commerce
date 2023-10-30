-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ratingsAverage" DOUBLE PRECISION,
ADD COLUMN     "ratingsQuantity" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "passwordResetExpires" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT;
