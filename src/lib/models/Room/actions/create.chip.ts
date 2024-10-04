import { v4 } from "uuid";
import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";

export const createChip: Action = async ({ request }) => {
  await db.transaction().execute(async (trx) => {
    const data = await request.formData();
    const roomId = data.get("roomId");

    const maxChipCount = await trx
      .selectFrom("Chip")
      .where("roomId", "=", roomId)
      .select(db.fn.max("chipCount").as("maxChipCount"))
      .executeTakeFirst();
    const chipCount = (maxChipCount?.maxChipCount || 0) + 1;

    const users = await trx
      .selectFrom("User")
      .innerJoin("RoomUser", "User.id", "RoomUser.userId")
      .where("RoomUser.roomId", "=", roomId)
      .select("User.id")
      .execute();
    const userIds = users.map((user) => user.id);

    const ChipForm = userIds.map((userId) => ({
      id: v4(),
      input: 0,
      chip: 0,
      chipCount,
      userId,
      roomId,
    }));
    await trx.insertInto("Chip").values(ChipForm).execute();
  });
  return { success: true, type: "create-chip" };
};
