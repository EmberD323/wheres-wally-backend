-- CreateTable
CREATE TABLE "Scores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seconds" INTEGER NOT NULL,

    CONSTRAINT "Scores_pkey" PRIMARY KEY ("id")
);
