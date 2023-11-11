/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `productCategory` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Electronic', 'Fashion');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productCategory" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "Category" TEXT NOT NULL DEFAULT 'user';
