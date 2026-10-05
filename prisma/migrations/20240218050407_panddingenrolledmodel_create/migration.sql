-- CreateTable
CREATE TABLE "panddingEnrolledModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" DECIMAL(65,30) NOT NULL,
    "ZIPCode" DECIMAL(65,30) NOT NULL,
    "division" TEXT,
    "district" TEXT,
    "thana" TEXT,
    "TotalPriceWithCharge" DOUBLE PRECISION NOT NULL,
    "isEnrolled" BOOLEAN NOT NULL DEFAULT false,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "panddingEnrolledModel_id_key" ON "panddingEnrolledModel"("id");

-- AddForeignKey
ALTER TABLE "panddingEnrolledModel" ADD CONSTRAINT "panddingEnrolledModel_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
