/*
  Warnings:

  - You are about to drop the column `chipCount` on the `RoomUser` table. All the data in the column will be lost.
  - You are about to drop the column `scoreCount` on the `RoomUser` table. All the data in the column will be lost.
  - Added the required column `chipCount` to the `Chip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameCount` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chip" ADD COLUMN     "chipCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RoomUser" DROP COLUMN "chipCount",
DROP COLUMN "scoreCount";

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "gameCount" INTEGER NOT NULL;
