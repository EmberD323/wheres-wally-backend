/*
  Warnings:

  - Changed the type of `x` on the `Coords` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `y` on the `Coords` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Coords" DROP COLUMN "x",
ADD COLUMN     "x" DOUBLE PRECISION NOT NULL,
DROP COLUMN "y",
ADD COLUMN     "y" DOUBLE PRECISION NOT NULL;
