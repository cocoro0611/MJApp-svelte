import db from "$lib/models/db.js";
import type { ScoreData } from "../type.js";

export async function readScores(): Promise<ScoreData[]> {
  const scores = await db
    .selectFrom("Score")
    .innerJoin("RoomUser", (join) =>
      join
        .onRef("Score.roomId", "=", "RoomUser.roomId")
        .onRef("Score.userId", "=", "RoomUser.userId")
    )
    .select([
      "Score.id",
      "Score.input",
      "Score.score",
      "Score.gameCount",
      "Score.userId",
      "Score.roomId",
      "RoomUser.order as order",
    ])
    .orderBy("Score.gameCount", "asc")
    .orderBy("RoomUser.order", "asc")
    .execute();

  const groupedScores: { [key: string]: ScoreData } = {};
  scores.forEach((score) => {
    const key = `${score.roomId}-${score.gameCount}`;
    if (!groupedScores[key]) {
      groupedScores[key] = {
        roomId: score.roomId,
        gameCount: score.gameCount,
        userScores: [],
      };
    }
    groupedScores[key].userScores.push({
      id: score.id,
      input: score.input,
      score: score.score,
      order: score.order,
      userId: score.userId,
    });
  });
  return Object.values(groupedScores);
}
