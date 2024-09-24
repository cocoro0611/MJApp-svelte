import type { Room } from "../interface.js";

export interface RoomCardData extends Pick<Room, "id" | "name" > {}