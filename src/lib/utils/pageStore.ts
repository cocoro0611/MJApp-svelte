import { writable } from "svelte/store";
import type { PageType } from "$lib/models/page-type.js";
import { getLocalData, saveLocalData } from "$lib/utils/localStorage.js";
import { isValidPageType } from "$lib/models/page-type.js";

function createPageStore() {
  const storedPage = getLocalData("currentPage");
  const initialPage: PageType =
    storedPage !== null && isValidPageType(storedPage) ? storedPage : "room";
  const { subscribe, set, update } = writable<PageType>(initialPage);

  return {
    subscribe,
    set: (value: PageType) => {
      saveLocalData("currentPage", value);
      set(value);
    },
    update,
  };
}

export const currentPage = createPageStore();
