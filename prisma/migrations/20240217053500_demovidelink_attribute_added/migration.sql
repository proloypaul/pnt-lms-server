/*
  Warnings:

  - Added the required column `demoVideoLink` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "demoVideoLink" TEXT NOT NULL;
