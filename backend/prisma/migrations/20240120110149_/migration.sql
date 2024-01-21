/*
  Warnings:

  - You are about to drop the column `Note` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Note",
ADD COLUMN     "note" TEXT;
