import type { PageServerLoad, Actions } from './$types.js';

import { createUser } from '$lib/models/Member/actions/create.js';
import { updateUser } from '$lib/models/Member/actions/update.js';
import { deleteUser } from '$lib/models/Member/actions/delete.js';
import { readUsers } from '$lib/models/Member/actions/read.js';

import { createRoom, createScore } from '$lib/models/Room/actions/create.js';
import { updateScore } from '$lib/models/Room/actions/update.js';
import { deleteRoom } from '$lib/models/Room/actions/delete.js';
import { readRooms, readScores } from '$lib/models/Room/actions/read.js';

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