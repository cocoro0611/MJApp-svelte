export type PageType =
  | "room"
  | "roomNew"
  | "roomDetail"
  | "member"
  | "memberNew"
  | "memberDetail"
  | "fuCount"
  | "hanCount";

export const saveLocalData = (key: string, page: string) => {
  localStorage.setItem(key, page);
};

export const removeLocalData = (key: string) => {
  localStorage.removeItem(key);
};

export const getLocalData = (key: string): string | null => {
  return localStorage.getItem(key) as string | null;
};

export const isValidPageType = (page: string): page is PageType => {
  return ["room", "member", "fuCount", "hanCount"].includes(page);
};
