import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";

export const deleteRoom: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");
  const userIds = data.getAll("userId");

  await db
    .deleteFrom("Score")
    .where("roomId", "=", id)
    .where("userId", "in", userIds)
    .execute();

  await db
    .deleteFrom("Chip")
    .where("roomId", "=", id)
    .where("userId", "in", userIds)
    .execute();

  await db
    .deleteFrom("RoomUser")
    .where("roomId", "=", id)
    .where("userId", "in", userIds)
    .execute();

  await db.deleteFrom("Room").where("id", "=", id).execute();
};

export const deleteScore: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  await db.deleteFrom("Score").where("id", "=", id).execute();
};

export const deleteChip: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  await db.deleteFrom("Chip").where("id", "=", id).execute();
};
