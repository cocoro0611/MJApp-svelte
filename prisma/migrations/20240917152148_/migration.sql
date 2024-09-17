/*
  Warnings:

  - A unique constraint covering the columns `[roomId,order]` on the table `RoomUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "RoomUser" ADD COLUMN     "order" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "order" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RoomUser_roomId_order_key" ON "RoomUser"("roomId", "order");
