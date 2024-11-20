-- CreateTable
CREATE TABLE "Coords" (
    "id" SERIAL NOT NULL,
    "x" TEXT NOT NULL,
    "y" TEXT NOT NULL,
    "character" TEXT NOT NULL,

    CONSTRAINT "Coords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coords_character_key" ON "Coords"("character");
