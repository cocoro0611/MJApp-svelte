/*
  Warnings:

  - You are about to drop the column `gameCount` on the `Chip` table. All the data in the column will be lost.
  - You are about to drop the column `gameCount` on the `Score` table. All the data in the column will be lost.
  - Added the required column `chipCount` to the `RoomUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scoreCount` to the `RoomUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chip" DROP COLUMN "gameCount";

-- AlterTable
ALTER TABLE "RoomUser" ADD COLUMN     "chipCount" INTEGER NOT NULL,
ADD COLUMN     "scoreCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "gameCount";
