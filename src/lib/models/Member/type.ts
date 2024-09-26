import type { User } from "../type.js";

export interface UserData extends Pick<User, "id" | "name" | "icon"> {}
