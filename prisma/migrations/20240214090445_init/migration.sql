-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "introAboutCourse" TEXT NOT NULL,
    "courseImgUrl" TEXT NOT NULL,
    "courseThummbnailUrl" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "categories" TEXT NOT NULL,
    "subCategories" TEXT NOT NULL,
    "courseLevel" TEXT NOT NULL,
    "outline" TEXT,
    "courseDuration" INTEGER NOT NULL,
    "learnSkill" TEXT NOT NULL,
    "courseDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_id_key" ON "courses"("id");
