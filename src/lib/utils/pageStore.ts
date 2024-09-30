import { writable } from "svelte/store";
import {
  getLocalData,
  saveLocalData,
  removeLocalData,
} from "$lib/utils/localStorage.js";
import type { RoomData } from "$lib/models/Room/type.js";

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
  return [
    "room",
    "roomNew",
    "roomDetail",
    "member",
    "memberNew",
    "memberDetail",
    "fuCount",
    "hanCount",
  ].includes(page);
};

export const isValidRoomData = (
  room: RoomData | undefined
): room is RoomData => {
  return (
    room !== undefined && "id" in room && "name" in room && "users" in room
  );
};

// FIXME:ページの遷移管理
function createPageStore() {
  const storedPage = getLocalData("currentPage");
  const initialPage: PageType =
    storedPage !== null && isValidPageType(storedPage) ? storedPage : "room";
  const { subscribe, set } = writable<PageType>(initialPage);

  return {
    subscribe,
    set: (value: PageType) => {
      if (value !== "roomDetail") {
        removeLocalData("roomId");
      }
      if (value !== "memberDetail") {
        removeLocalData("userId");
      }
      saveLocalData("currentPage", value);
      set(value);
    },
  };
}

export const currentPage = createPageStore();
