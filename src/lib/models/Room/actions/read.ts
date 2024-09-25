import db from "$lib/models/db.js";
import type { RoomData, ScoreData } from "../type.js";

export async function readRooms(): Promise<RoomData[]> {
  const rooms = await db
    .selectFrom("Room")
    .select([
      "id",
      "name",
      "initialPoint",
      "returnPoint",
      "bonusPoint",
      "gameRate",
      "chipValue",
    ])
    .orderBy("Room.updatedAt", "desc")
    .execute();
  const roomIds = rooms.map(({ id }) => id);

  const users =
    roomIds.length > 0
      ? await db
          .selectFrom("User")
          .innerJoin("RoomUser", "User.id", "RoomUser.userId")
          .select(["User.id", "User.name", "User.icon", "RoomUser.roomId"])
          .where("RoomUser.roomId", "in", roomIds)
          .execute()
      : [];

  const totalScores =
    roomIds.length > 0
      ? await db
          .selectFrom("Score")
          .select([
            "Score.userId",
            "Score.roomId",
            db.fn.sum<number>("score").as("totalScore"),
            db.fn.sum<number>("chip").as("totalChip"),
          ])
          .where("Score.roomId", "in", roomIds)
          .groupBy(["Score.userId", "Score.roomId"])
          .execute()
      : [];

  return rooms.map(({ id, ...room }) => ({
    id,
    ...room,
    users: users
      .filter((user) => user.roomId === id)
      .map((user) => {
        const userScore = totalScores.find(
          (score) => score.userId === user.id && score.roomId === id
        );
        const totalScore = Number(userScore?.totalScore ?? 0);
        const totalChip = Number(userScore?.totalChip ?? 0);

        return {
          id: user.id,
          name: user.name,
          icon: user.icon,
          totalScore,
          totalChip,
          // TODO:場代の計算も考慮
          totalPoint:
            Number(room.gameRate) * totalScore +
            Number(room.chipValue) * totalChip,
        };
      }),
  }));
}

export async function readScores(): Promise<ScoreData[]> {
  // まず、全てのRoomを取得
  const rooms = await db.selectFrom("Room").select(["id"]).execute();
  const roomIds = rooms.map(({ id }) => id);

  if (roomIds.length === 0) {
    return [];
  }

  // 各Roomに属するUserを取得
  const users = await db
    .selectFrom("RoomUser")
    .innerJoin("User", "User.id", "RoomUser.userId")
    .select([
      "User.id as userId",
      "User.name",
      "User.icon",
      "RoomUser.roomId",
      "RoomUser.order",
    ])
    .where("RoomUser.roomId", "in", roomIds)
    .execute();

  // 各RoomのScoreを取得
  const scores = await db
    .selectFrom("Score")
    .select([
      "Score.roomId",
      "Score.userId",
      "Score.gamesNumber",
      "Score.score",
      "Score.chip",
    ])
    .where("Score.roomId", "in", roomIds)
    .orderBy("Score.gamesNumber", "asc")
    .execute();

  // Roomごとにデータを整形
  const scoreDataMap = new Map<string, ScoreData[]>();

  for (const score of scores) {
    if (!scoreDataMap.has(score.roomId)) {
      scoreDataMap.set(score.roomId, []);
    }

    const roomScores = scoreDataMap.get(score.roomId)!;
    let gameScore = roomScores.find((g) => g.gamesNumber === score.gamesNumber);

    if (!gameScore) {
      gameScore = {
        roomId: score.roomId,
        gamesNumber: score.gamesNumber,
        playerScores: [],
      };
      roomScores.push(gameScore);
    }

    const existingPlayerScore = gameScore.playerScores.find(
      (ps) => ps.userId === score.userId
    );
    if (existingPlayerScore) {
      existingPlayerScore.score = score.score;
      existingPlayerScore.chip = score.chip ?? 0;
      // pointの計算ロジックを追加する必要があります
      existingPlayerScore.point = 0; // 仮の値
    } else {
      const user = users.find(
        (u) => u.userId === score.userId && u.roomId === score.roomId
      );
      gameScore.playerScores.push({
        userId: score.userId,
        score: score.score,
        chip: score.chip ?? 0,
        point: 0, // 仮の値
        order: user?.order ?? 0,
      });
    }
  }

  // 各ゲームのプレイヤースコアが揃っていない場合、0で埋める
  for (const roomScores of scoreDataMap.values()) {
    const allUsers = users.filter((u) => u.roomId === roomScores[0].roomId);
    for (const gameScore of roomScores) {
      for (const user of allUsers) {
        if (!gameScore.playerScores.some((ps) => ps.userId === user.userId)) {
          gameScore.playerScores.push({
            userId: user.userId,
            score: 0,
            chip: 0,
            point: 0,
            order: user.order,
          });
        }
      }
      // orderでソート
      gameScore.playerScores.sort((a, b) => a.order - b.order);
    }
  }

  // 全てのroomのscoreを1つの配列にフラット化
  return Array.from(scoreDataMap.values()).flat();
}
