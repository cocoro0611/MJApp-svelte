import type { Room, Score, RoomUser } from "../interface.js";
import type { UserData } from "../Member/type.js";

export interface RoomData
  extends Pick<
    Room,
    | "id"
    | "name"
    | "initialPoint"
    | "returnPoint"
    | "bonusPoint"
    | "gameRate"
    | "chipValue"
  > {
  users: (UserData & {
    totalScore: number;
    totalChip: number;
    totalPoint: number;
  })[];
}

export interface ScoreData extends Pick<Score, "roomId" | "gamesNumber"> {
  playerScores: (Pick<Score, "score" | "chip"> &
    Pick<RoomUser, "userId" | "order"> & { point: number })[];
}
