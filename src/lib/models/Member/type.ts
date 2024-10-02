import type { User } from "../types.js";

export interface UserData
  extends Pick<User, "id" | "name" | "icon" | "isSelected"> {}
