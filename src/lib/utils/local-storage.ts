import { browser } from "$app/environment";

export const saveLocalData = (key: string, page: string) => {
  if (browser) {
    localStorage.setItem(key, page);
  }
};

export const removeLocalData = (key: string) => {
  if (browser) {
    localStorage.removeItem(key);
  }
};

export const getLocalData = (key: string): string | null => {
  if (browser) {
    return localStorage.getItem(key);
  }
  return null;
};
