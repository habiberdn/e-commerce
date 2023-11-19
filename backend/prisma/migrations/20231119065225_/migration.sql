/*
  Warnings:

  - A unique constraint covering the columns `[product]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rating_product_key" ON "Rating"("product");
