import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";

export const deleteRoom: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  await db.transaction().execute(async (trx) => {
    const roomUsers = await trx
      .selectFrom("RoomUser")
      .select("userId")
      .where("roomId", "=", id)
      .execute();
    const userIds = roomUsers.map((ru) => ru.userId);

    await trx
      .deleteFrom("Score")
      .where("roomId", "=", id)
      .where("userId", "in", userIds)
      .execute();

    await trx
      .deleteFrom("Chip")
      .where("roomId", "=", id)
      .where("userId", "in", userIds)
      .execute();

    await trx
      .deleteFrom("RoomUser")
      .where("roomId", "=", id)
      .where("userId", "in", userIds)
      .execute();

    await trx.deleteFrom("Room").where("id", "=", id).execute();
  });

  return { success: true, type: "delete-room" };
};

export const deleteScore: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  await db.deleteFrom("Score").where("id", "=", id).execute();
  return { success: true };
};

export const deleteChip: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  await db.deleteFrom("Chip").where("id", "=", id).execute();
  return { success: true };
};
