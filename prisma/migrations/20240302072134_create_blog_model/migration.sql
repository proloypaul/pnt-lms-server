-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "blogThumbnail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "expert" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "socialMedia" TEXT[],
    "skills" TEXT[],
    "article" TEXT NOT NULL,
    "readInTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");
