import { v4 } from "uuid";
import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";

export const createScore: Action = async ({ request }) => {
  await db.transaction().execute(async (trx) => {
    const data = await request.formData();
    const roomId = data.get("roomId");

    const maxGameCount = await trx
      .selectFrom("Score")
      .where("roomId", "=", roomId)
      .select(db.fn.max("gameCount").as("maxGameCount"))
      .executeTakeFirst();
    const gameCount = (maxGameCount?.maxGameCount || 1) + 1;

    const users = await trx
      .selectFrom("User")
      .innerJoin("RoomUser", "User.id", "RoomUser.userId")
      .where("RoomUser.roomId", "=", roomId)
      .select("User.id")
      .execute();
    const userIds = users.map((user) => user.id);

    const ScoreForm = userIds.map((userId) => ({
      id: v4(),
      input: 0,
      score: 0,
      gameCount,
      userId,
      roomId,
    }));
    await trx.insertInto("Score").values(ScoreForm).execute();
  });
  return { success: true, type: "create-score" };
};
