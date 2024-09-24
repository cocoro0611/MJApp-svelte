import db from "$lib/models/db.js";
import type { Score } from "$lib/models/interface.js";
import type { RoomData } from "../type.js";

export async function readRooms(): Promise<RoomData[]> {
  const rooms = await db
    .selectFrom("Room")
    .select(["id", "name"])
    .orderBy("Room.updatedAt", "desc")
    .execute();
  const roomIds = rooms.map(({ id }) => id);

  const users = await db
    .selectFrom("User")
    .innerJoin("RoomUser", "User.id", "RoomUser.userId")
    .select(["User.id", "User.name", "User.icon", "RoomUser.roomId"])
    .where("RoomUser.roomId", "in", roomIds)
    .execute();

  return rooms.map(({ id, ...room }) => ({
    id,
    ...room,
    users: users
      .filter((user) => user.roomId === id)
      .map(({ id, name, icon }) => ({ id, name, icon })),
  }));
}

export async function readScores(): Promise<Score[]> {
  const scores = await db.selectFrom("Score").selectAll().execute();

  return scores.map((score) => ({
    id: score.id,
    createdAt: score.createdAt,
    order: score.order,
    score: score.score,
    chip: score.chip,
    roomId: score.roomId,
    userId: score.userId,
  }));
}
