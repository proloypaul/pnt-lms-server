/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "userQuizeAns" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quizeName" TEXT NOT NULL,
    "quizeId" TEXT NOT NULL,
    "userAns" TEXT[],
    "isTaken" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userQuizeAns_id_key" ON "userQuizeAns"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_number_key" ON "Student"("number");
