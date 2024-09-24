import type { User } from "../interface.js";

export interface UserData extends Pick<User, "id" | "name" | "icon" > {}