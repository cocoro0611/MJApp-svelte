import db from "$lib/models/db.js";
import type { RoomData } from "../type.js";

export async function readRooms(): Promise<RoomData[]> {
  const rooms = await db
    .selectFrom("Room")
    .select([
      "id",
      "name",
      "initialPoint",
      "returnPoint",
      "bonusPoint",
      "gameRate",
      "chipValue",
    ])
    .orderBy("Room.updatedAt", "desc")
    .execute();
  const roomIds = rooms.map(({ id }) => id);

  const users =
    roomIds.length > 0
      ? await db
          .selectFrom("User")
          .innerJoin("RoomUser", "User.id", "RoomUser.userId")
          .select(["User.id", "User.name", "User.icon", "RoomUser.roomId"])
          .where("RoomUser.roomId", "in", roomIds)
          .execute()
      : [];

  const totalScores =
    roomIds.length > 0
      ? await db
          .selectFrom("Score")
          .select([
            "Score.userId",
            "Score.roomId",
            db.fn.sum<number>("score").as("totalScore"),
            db.fn.sum<number>("chip").as("totalChip"),
          ])
          .where("Score.roomId", "in", roomIds)
          .groupBy(["Score.userId", "Score.roomId"])
          .execute()
      : [];

  return rooms.map(({ id, ...room }) => ({
    id,
    ...room,
    users: users
      .filter((user) => user.roomId === id)
      .map((user) => {
        const userScore = totalScores.find(
          (score) => score.userId === user.id && score.roomId === id
        );
        const totalScore = Number(userScore?.totalScore ?? 0);
        const totalChip = Number(userScore?.totalChip ?? 0);

        return {
          id: user.id,
          name: user.name,
          icon: user.icon,
          totalScore,
          totalChip,
          // TODO:場代の計算も考慮
          totalPoint:
            Number(room.gameRate) * totalScore +
            Number(room.chipValue) * totalChip,
        };
      }),
  }));
}
