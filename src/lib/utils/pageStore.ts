import { writable } from "svelte/store";
import {
  getLocalData,
  saveLocalData,
  removeLocalData,
} from "$lib/utils/localStorage.js";

export type PageType =
  | "room"
  | "roomNew"
  | "roomDetail"
  | "member"
  | "memberNew"
  | "memberDetail"
  | "fuCount"
  | "hanCount";

// FIXME:ページの遷移管理
function createPageStore() {
  const storedPage = getLocalData("currentPage") as PageType | null;
  const initialPage: PageType = storedPage ?? "room";
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
      if (
        value !== "roomNew" &&
        value !== "memberNew" &&
        value !== "memberDetail"
      ) {
        saveLocalData("currentPage", value);
      }
      set(value);
    },
  };
}

export const currentPage = createPageStore();
