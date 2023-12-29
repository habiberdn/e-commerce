/*
  Warnings:

  - You are about to drop the column `sellerEmail` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sellerName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Seller` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sellerEmail_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sellerEmail",
ADD COLUMN     "sellerName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Seller" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Seller_name_key" ON "Seller"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerName_fkey" FOREIGN KEY ("sellerName") REFERENCES "Seller"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
