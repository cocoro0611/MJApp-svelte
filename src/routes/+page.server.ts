import type { PageServerLoad, Actions } from './$types.js';

import { createUser } from '$lib/models/Member/actions/create.js';
import { updateUser } from '$lib/models/Member/actions/update.js';
import { deleteUser } from '$lib/models/Member/actions/delete.js';
import { readUsers } from '$lib/models/Member/actions/read.js';

import { createRoom } from '$lib/models/Total-Point/actions/create.js';
import { deleteRoom } from '$lib/models/Total-Point/actions/delete.js';
import { readRooms } from '$lib/models/Total-Point/actions/read.js';

export const actions: Actions = {
    createUser,
    updateUser,
    deleteUser,
    createRoom,
    deleteRoom
};

export const load: PageServerLoad = async () => {
    const users = await readUsers();
    const rooms = await readRooms();
    // const scores = await readScores();
    // return { users, rooms, scores};
    return { users ,rooms};
};