export const saveLocalData = (key: string, page: string) => {
  localStorage.setItem(key, page);
};

export const removeLocalData = (key: string) => {
  localStorage.removeItem(key);
};

export const getLocalData = (key: string): string | null => {
  return localStorage.getItem(key) as string | null;
};
