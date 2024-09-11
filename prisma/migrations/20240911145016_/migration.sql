/*
  Warnings:

  - The `score` column on the `Score` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `chip` column on the `Score` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_userId_fkey";

-- DropIndex
DROP INDEX "Score_userId_roomId_key";

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "score",
ADD COLUMN     "score" INTEGER,
DROP COLUMN "chip",
ADD COLUMN     "chip" INTEGER;

-- CreateIndex
CREATE INDEX "Score_roomId_userId_idx" ON "Score"("roomId", "userId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_roomId_userId_fkey" FOREIGN KEY ("roomId", "userId") REFERENCES "RoomUser"("roomId", "userId") ON DELETE RESTRICT ON UPDATE CASCADE;
