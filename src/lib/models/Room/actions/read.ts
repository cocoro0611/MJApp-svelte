import db from "$lib/models/db.js";
import type { RoomData, ScoreData } from "../type.js";

export async function readRooms(): Promise<RoomData[]> {
  const rooms = await db
    .selectFrom("Room")
    .selectAll()
    .orderBy("Room.updatedAt", "desc")
    .execute();
  const roomIds = rooms.map(({ id }) => id);

  const users =
    roomIds.length > 0
      ? await db
          .selectFrom("User")
          .innerJoin("RoomUser", "User.id", "RoomUser.userId")
          .select(["User.id", "User.name", "User.icon", "RoomUser.roomId"])
          .orderBy("RoomUser.order", "asc")
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
          ])
          .where("Score.roomId", "in", roomIds)
          .groupBy(["Score.userId", "Score.roomId"])
          .execute()
      : [];

  const totalChips =
    roomIds.length > 0
      ? await db
          .selectFrom("Chip")
          .select([
            "Chip.userId",
            "Chip.roomId",
            db.fn.sum<number>("chip").as("totalChip"),
            db.fn.max<number>("gameCount").as("gameCount"),
          ])
          .where("Chip.roomId", "in", roomIds)
          .groupBy(["Chip.userId", "Chip.roomId"])
          .execute()
      : [];

  return rooms.map(
    (room): RoomData => ({
      id: room.id,
      name: room.name,
      initialPoint: room.initialPoint,
      returnPoint: room.returnPoint,
      bonusPoint: room.bonusPoint,
      scoreRate: room.scoreRate,
      chipRate: room.chipRate,
      gameAmount: room.gameAmount,
      users: users
        .filter((user) => user.roomId === room.id)
        .map((user) => {
          const userScore = totalScores.find(
            (score) => score.userId === user.id && score.roomId === room.id
          );
          const totalScore = Number(userScore?.totalScore ?? 0);

          const userChip = totalChips.find(
            (chip) => chip.userId === user.id && chip.roomId === room.id
          );
          const totalChip = Number(userChip?.totalChip ?? 0);
          const gameCount = Number(userChip?.gameCount ?? 0);

          return {
            id: user.id,
            name: user.name,
            icon: user.icon,
            totalScore,
            totalChip,
            totalPoint:
              Number(room.scoreRate) * totalScore +
              Number(room.chipRate) * (totalChip - 20 * gameCount) -
              Number(room.gameAmount) / 4,
          };
        }),
    })
  );
}

export async function readScores(): Promise<ScoreData[]> {
  const scores = await db
    .selectFrom("Score")
    .innerJoin("RoomUser", (join) =>
      join
        .onRef("Score.roomId", "=", "RoomUser.roomId")
        .onRef("Score.userId", "=", "RoomUser.userId")
    )
    .select([
      "Score.id",
      "Score.input",
      "Score.score",
      "Score.gameCount",
      "Score.userId",
      "Score.roomId",
      "RoomUser.order as order",
    ])
    .orderBy("Score.gameCount", "asc")
    .orderBy("RoomUser.order", "asc")
    .execute();

  const groupedScores: { [key: string]: ScoreData } = {};
  scores.forEach((score) => {
    const key = `${score.roomId}-${score.gameCount}`;
    if (!groupedScores[key]) {
      groupedScores[key] = {
        roomId: score.roomId,
        gameCount: score.gameCount,
        userScores: [],
      };
    }
    groupedScores[key].userScores.push({
      id: score.id,
      input: score.input,
      score: score.score,
      order: score.order,
      userId: score.userId,
    });
  });
  return Object.values(groupedScores);
}
