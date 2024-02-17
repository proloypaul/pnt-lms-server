/*
  Warnings:

  - The `learnSkill` column on the `courses` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "learnSkill",
ADD COLUMN     "learnSkill" TEXT[];
