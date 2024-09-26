/*
  Warnings:

  - Added the required column `inputScore` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Made the column `gamesNumber` on table `Score` required. This step will fail if there are existing NULL values in that column.
  - Made the column `score` on table `Score` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "inputScore" INTEGER NOT NULL,
ALTER COLUMN "gamesNumber" SET NOT NULL,
ALTER COLUMN "score" SET NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
