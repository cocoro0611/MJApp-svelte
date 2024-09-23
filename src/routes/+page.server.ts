import type { PageServerLoad, Actions } from './$types.js';

import { createUser } from '$lib/models/Member/create.js';
import { updateUser } from '$lib/models/Member/update.js';
import { deleteUser } from '$lib/models/Member/delete.js';
import { readUsers } from '$lib/models/Member/read.js';

import { createRoom, createScore } from '$lib/models/Room/create.js';
import { updateScore } from '$lib/models/Room/update.js';
import { deleteRoom } from '$lib/models/Room/delete.js';
import { readRooms, readScores } from '$lib/models/Room/read.js';

export const actions: Actions = {
    createUser,
    updateUser,
    deleteUser,
    createRoom,
    deleteRoom,
    createScore,
    updateScore
};

export const load: PageServerLoad = async () => {
    const users = await readUsers();
    const rooms = await readRooms();
    const scores = await readScores();
    return { users, rooms, scores};
};