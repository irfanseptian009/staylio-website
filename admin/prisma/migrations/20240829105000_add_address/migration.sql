/*
  Warnings:

  - Added the required column `address` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "rating" DECIMAL(65,30) NOT NULL;
