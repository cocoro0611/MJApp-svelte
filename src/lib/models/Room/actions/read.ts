import db from "$lib/models/db.js";
import type { RoomData, ScoreData, ChipData } from "../type.js";

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
            db.fn.max<number>("count").as("gameCount"),
          ])
          .where("Chip.roomId", "in", roomIds)
          .groupBy(["Chip.userId", "Chip.roomId"])
          .execute()
      : [];

  return rooms.map(
    (room): RoomData => ({
      id: room.id,
      name: room.name,
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

          // TODO: ３人麻雀対応
          return {
            id: user.id,
            name: user.name,
            icon: user.icon,
            totalScore,
            totalChip,
            totalPoint:
              Number(room.scoreRate) * totalScore +
              Number(room.chipRate) * (totalChip - 20 * gameCount) -
              Number(room.gameAmount) / 4, //４人麻雀専用,
          };
        }),
    })
  );
}

export async function readScores(): Promise<ScoreData[]> {
  const scores = await db
    .selectFrom("Score")
    .select(["id", "input", "score", "count"])
    .execute();

  return scores.map(
    (score): ScoreData => ({
      id: score.id,
      input: score.input,
      score: score.score,
      count: score.count,
    })
  );
}

export async function readChips(): Promise<ChipData[]> {
  const chips = await db
    .selectFrom("Chip")
    .select(["id", "input", "chip", "count"])
    .execute();

  return chips.map(
    (chip): ChipData => ({
      id: chip.id,
      input: chip.input,
      chip: chip.chip,
      count: chip.count,
    })
  );
}
