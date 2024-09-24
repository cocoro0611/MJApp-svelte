import type { Room } from "../interface.js";
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
  users: (UserData & { totalScore: number })[];
}
