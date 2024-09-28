import type { RoomData } from "./Room/type.js";

export type PageType =
  | "room"
  | "roomNew"
  | "roomDetail"
  | "member"
  | "memberNew"
  | "memberDetail"
  | "fuCount"
  | "hanCount";

export const isValidPageType = (page: string): page is PageType => {
  return ["room", "member", "fuCount", "hanCount"].includes(page);
};

export const isValidRoomData = (
  room: RoomData | undefined
): room is RoomData => {
  return (
    room !== undefined && "id" in room && "name" in room && "users" in room
  );
};
