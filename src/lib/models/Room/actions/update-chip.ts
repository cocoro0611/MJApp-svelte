import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";
import dayjs from "dayjs";

export const updateChip: Action = async ({ request }) => {
  const data = await request.formData();
  const roomId = data.get("roomId");
  const chipCounts = data.getAll("chipCount[]");
  const ids = data.getAll("id[]");
  const inputs = data.getAll("input[]");

  let currentIndex = 0;
  for (let i = 0; i < chipCounts.length; i++) {
    const chipCount = chipCounts[i];
    const userCount = 4;

    for (let j = 0; j < userCount; j++) {
      const id = ids[currentIndex];
      const input = inputs[currentIndex];

      const updateData = {
        input: Number(input),
        chip: Number(input),
        updatedAt: dayjs().toDate(),
      };

      await db
        .updateTable("Chip")
        .set(updateData)
        .where("id", "=", id)
        .where("roomId", "=", roomId)
        .where("chipCount", "=", chipCount)
        .execute();

      currentIndex++;
    }
  }
  return { success: true, type: "update-chip" };
};
