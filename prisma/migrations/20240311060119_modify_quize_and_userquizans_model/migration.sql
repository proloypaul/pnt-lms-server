-- AddForeignKey
ALTER TABLE "userQuizeAns" ADD CONSTRAINT "userQuizeAns_quizeId_fkey" FOREIGN KEY ("quizeId") REFERENCES "quizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
