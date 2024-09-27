/*
  Warnings:

  - You are about to drop the column `count` on the `Chip` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `Score` table. All the data in the column will be lost.
  - Added the required column `gameCount` to the `Chip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameCount` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chip" DROP COLUMN "count",
ADD COLUMN     "gameCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "count",
ADD COLUMN     "gameCount" INTEGER NOT NULL;
