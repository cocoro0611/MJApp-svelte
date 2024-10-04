import type { PageServerLoad, Actions } from "./$types.js";

import { createUser } from "$lib/models/Member/actions/create.js";
import { updateUser } from "$lib/models/Member/actions/update.js";
import { deleteUser } from "$lib/models/Member/actions/delete.js";

import { createRoom } from "$lib/models/Room/actions/create-room.js";
import { createScore } from "$lib/models/Room/actions/create-score.js";
import { createChip } from "$lib/models/Room/actions/create.chip.js";

import {
  updateRoom,
  updateRoomUser,
} from "$lib/models/Room/actions/update-room.js";
import { updateScore } from "$lib/models/Room/actions/update-score.js";
import { updateChip } from "$lib/models/Room/actions/update-chip.js";

import {
  deleteRoom,
  deleteScore,
  deleteChip,
} from "$lib/models/Room/actions/delete.js";

import { readUsers } from "$lib/models/Member/actions/read.js";
import { readRooms } from "$lib/models/Room/actions/read-room.js";
import { readScores } from "$lib/models/Room/actions/read-score.js";
import { readChips } from "$lib/models/Room/actions/read.chip.js";

export const actions: Actions = {
  "create-user": createUser,
  "update-user": updateUser,
  "delete-user": deleteUser,
  "create-room": createRoom,
  "update-room": updateRoom,
  "update-room-user": updateRoomUser,
  "delete-room": deleteRoom,
  "create-score": createScore,
  "update-score": updateScore,
  "delete-score": deleteScore,
  "create-chip": createChip,
  "update-chip": updateChip,
  "delete-chip": deleteChip,
};

export const load: PageServerLoad = async () => {
  const users = await readUsers();
  const rooms = await readRooms();
  const scores = await readScores();
  const chips = await readChips();
  return { users, rooms, scores, chips };
};
