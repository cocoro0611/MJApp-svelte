import type { Room } from "../interface.js";
import type { UserData } from "../Member/type.js";

export interface RoomData
  extends Omit<
    RoomDetailData,
    "initialPoint" | "returnPoint" | "bonusPoint" | "Rate" | "chipValue"
  > {}

export interface RoomDetailData
  extends Pick<
    Room,
    | "id"
    | "name"
    | "initialPoint"
    | "returnPoint"
    | "bonusPoint"
    | "Rate"
    | "chipValue"
  > {
  users: UserData[];
}
