-- CreateTable
CREATE TABLE "quizes" (
    "id" TEXT NOT NULL,
    "quizeName" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "chapterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "questionName" TEXT NOT NULL,
    "options" TEXT[],
    "questionAnswer" TEXT NOT NULL,
    "quizeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "quizes_id_key" ON "quizes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "questions_id_key" ON "questions"("id");

-- AddForeignKey
ALTER TABLE "quizes" ADD CONSTRAINT "quizes_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_quizeId_fkey" FOREIGN KEY ("quizeId") REFERENCES "quizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
