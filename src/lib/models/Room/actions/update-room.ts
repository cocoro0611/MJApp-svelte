import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";
import dayjs from "dayjs";

export const updateRoom: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  await db.transaction().execute(async (trx) => {
    const getRoom = await trx
      .selectFrom("Room")
      .select(["name"])
      .where("id", "=", id)
      .executeTakeFirst();

    const updateData = {
      name: getRoom?.name,
      initialPoint: data.get("initialPoint"),
      returnPoint: data.get("returnPoint"),
      bonusPoint: data.get("bonusPoint"),
      scoreRate: data.get("scoreRate"),
      chipRate: data.get("chipRate"),
      gameAmount: data.get("gameAmount"),
      updatedAt: dayjs().toDate(),
    };

    await trx
      .updateTable("Room")
      .set(updateData)
      .where("id", "=", id)
      .execute();
  });
  return { success: true, type: "update-room" };
};

export const updateRoomUser: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  const updateData = {
    name: data.get("name"),
    icon: data.get("icon"),
    updatedAt: dayjs().toDate(),
  };
  await db.updateTable("User").set(updateData).where("id", "=", id).execute();
  return { success: true, type: "update-room-user" };
};
