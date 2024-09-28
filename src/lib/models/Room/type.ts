import type { Room, Score, RoomUser, Chip } from "../types.js";
import type { UserData } from "../Member/type.js";

export interface RoomFormData
  extends Pick<
    Room,
    | "id"
    | "name"
    | "initialPoint"
    | "returnPoint"
    | "bonusPoint"
    | "scoreRate"
    | "chipRate"
    | "gameAmount"
  > {
  users: UserData[];
}

export interface RoomData extends Pick<Room, "id" | "name"> {
  users: (UserData & {
    totalScore: number;
    totalChip: number;
    totalPoint: number;
  })[];
}

export interface ScoreData extends Pick<Score, "roomId" | "gameCount"> {
  userScores: (Pick<Score, "id" | "input" | "score" | "userId"> &
    Pick<RoomUser, "order">)[];
}

// export interface ChipData
//   extends Pick<Chip, "id" | "input" | "chip" | "count"> {}
