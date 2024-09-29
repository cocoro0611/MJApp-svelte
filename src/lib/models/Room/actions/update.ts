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

  const umaList = [umaHigh, umaLow, -umaLow, -umaHigh];

  let currentIndex = 0;
  for (let i = 0; i < gameCounts.length; i++) {
    // TODO:スコアの計算
    const gameCount = gameCounts[i];
    const userCount = 4;

    let gameScores = [];
    for (let j = 0; j < userCount; j++) {
      const id = ids[currentIndex];
      const input = Number(inputs[currentIndex]);
      const baseScore = Math.round((input - Number(returnPoint) / 100) / 10);
      gameScores.push({ id, input, baseScore });
      currentIndex++;
    }

    // スコアで降順にソート
    gameScores.sort((a, b) => b.baseScore - a.baseScore);

    for (let j = 0; j < userCount; j++) {
      const { id, input, baseScore } = gameScores[j];
      let finalScore = baseScore + umaList[j];

      // 1位のプレイヤーにのみokaを加算
      if (j === 0) {
        finalScore += oka;
      }

      const updateData = {
        input: input,
        score: Math.round(finalScore),
        updatedAt: dayjs().toDate(),
      };
      await db
        .updateTable("Score")
        .set(updateData)
        .where("id", "=", id)
        .where("roomId", "=", roomId)
        .where("gameCount", "=", gameCount)
        .execute();
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
