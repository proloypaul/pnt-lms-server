-- CreateTable
CREATE TABLE "instructors" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "instructorImg" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "expert" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "socialMedia" TEXT[],
    "skills" TEXT[],
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "instructors_id_key" ON "instructors"("id");

-- AddForeignKey
ALTER TABLE "instructors" ADD CONSTRAINT "instructors_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
