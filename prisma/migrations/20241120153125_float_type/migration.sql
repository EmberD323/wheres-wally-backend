/*
  Warnings:

  - You are about to alter the column `x` on the `Coords` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `y` on the `Coords` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Coords" ALTER COLUMN "x" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "y" SET DATA TYPE DECIMAL(65,30);
