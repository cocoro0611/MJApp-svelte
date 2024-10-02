import { writable } from "svelte/store";
import { getLocalData, saveLocalData } from "$lib/utils/localStorage.js";

export type PageType =
  | "room"
  | "roomNew"
  | "roomEdit"
  | "roomUserEdit"
  | "roomDetail"
  | "roomTie"
  | "member"
  | "memberNew"
  | "memberEdit"
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
      saveLocalData("currentPage", value);
      set(value);
    },
  };
}

export const currentPage = createPageStore();
