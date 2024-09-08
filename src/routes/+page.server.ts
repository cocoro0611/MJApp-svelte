import db from '$lib/models/db.js';
import { v4 as uuidv4 } from 'uuid';
import type { PageServerLoad, Actions } from './$types.js';

import type { User } from "$lib/models/Member/types.js";
import type { Room } from "$lib/models/Total-Point/types.js";

export const actions: Actions = {
    createUser: async ({request}) => {
        const data = await request.formData();
        const userForm = {
            id: uuidv4(),
            name: data.get('name'),
            icon: data.get('icon'),
        };
        await db.insertInto('User').values(userForm).execute();
        return { success: true };
    },

    createRoom: async ({request}) => {
        const data = await request.formData();
        const roomForm = {
            id: uuidv4(),
            name: data.get('name'),
            initialPoint: data.get('initialPoint'),
            returnPoint: data.get('returnPoint'),
            bonusPoint: data.get('bonusPoint'),
            Rate: data.get('Rate'),
            chipValue: data.get('chipValue'),
        };
        await db.insertInto('Room').values(roomForm).execute();
        return { success: true };
    },

    updateUser: async ({request}) => {
        const data = await request.formData();
        const id = data.get('id');
        const updatedUserForm = {
            name: data.get('name'),
            icon: data.get('icon'),
        };
        await db.updateTable('User').set(updatedUserForm).where('id', '=', id).executeTakeFirst();;
        return { success: true };
    },

    deleteUser: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        await db.deleteFrom('User').where('id', '=', id).execute();
        return { success: true };
    },
};

export const load: PageServerLoad = async () => {
    const users = await db.selectFrom('User')
        .selectAll()
        .execute();

    const Users: User[] = users.map(user => ({
        id:user.id,
        name: user.name,
        icon: user.icon
    }));

    const rooms = await db.selectFrom('Room')
        .selectAll()
        .execute();

    const Rooms: Room[] = rooms.map(room => ({
        id:room.id,
        name: room.name,
        initialPoint : room.initialPoint,
        returnPoint  : room.returnPoint,
        bonusPoint  : room.bonusPoint ,
        Rate        : room.Rate   ,
        chipValue   : room.chipValue   
    }));

    return { users: Users, rooms:Rooms};
}