import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";
import dayjs from "dayjs";

export const updateRoom: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  const updateData = {
    name: data.get("name"),
    initialPoint: data.get("initialPoint"),
    returnPoint: data.get("returnPoint"),
    bonusPoint: data.get("bonusPoint"),
    scoreRate: data.get("scoreRate"),
    chipRate: data.get("chipRate"),
    gameAmount: data.get("gameAmount"),
    updatedAt: dayjs().toDate(),
  };

  await db.updateTable("Room").set(updateData).where("id", "=", id).execute();
};

export const updateScore: Action = async ({ request }) => {
  const data = await request.formData();
  const roomId = data.get("roomId");
  const initialPoint = data.get("initialPoint");
  const returnPoint = data.get("returnPoint");
  const bonusPoint = data.get("bonusPoint");
  const gameCounts = data.getAll("gameCount[]");
  const ids = data.getAll("id[]");
  const inputs = data.getAll("input[]");

  const oka = ((Number(returnPoint) - Number(initialPoint)) * 4) / 1000;
  const umaLow = Number(bonusPoint?.slice(0, 2));
  const umaHigh = Number(bonusPoint?.slice(3, 5));
  console.log("oka", oka);
  console.log("umaHigh", umaHigh);
  console.log("umaLow", umaLow);

  let currentIndex = 0;
  for (let i = 0; i < gameCounts.length; i++) {
    // TODO:スコアの計算
    const gameCount = gameCounts[i];
    const userCount = 4;

    for (let j = 0; j < userCount; j++) {
      const id = ids[currentIndex];
      const input = Number(inputs[currentIndex]);
      const score = Math.round((input - Number(returnPoint) / 100) / 10);

      const updateData = {
        input: input,
        score: score,
        updatedAt: dayjs().toDate(),
      };
      await db
        .updateTable("Score")
        .set(updateData)
        .where("id", "=", id)
        .where("roomId", "=", roomId)
        .where("gameCount", "=", gameCount)
        .execute();

      currentIndex++;
    }
  }
};

export const updateChip: Action = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id");

  const updateData = {
    input: data.get("input"),
    score: data.get("chip"),
    updatedAt: dayjs().toDate(),
  };

  await db.updateTable("Chip").set(updateData).where("id", "=", id).execute();
};
