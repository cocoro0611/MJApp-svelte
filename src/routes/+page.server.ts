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
        id: user.id,
        name: user.name,
        icon: user.icon
    }));

    const rooms = await db.selectFrom('Room')
        .select(['Room.id', 'Room.name', 'Room.initialPoint', 'Room.returnPoint', 'Room.bonusPoint', 'Room.Rate', 'Room.chipValue'])
        .leftJoin('_UserRooms', 'Room.id', '_UserRooms.A')
        .leftJoin('User', '_UserRooms.B', 'User.id')
        .select(['User.id as userId', 'User.name as userName', 'User.icon as userIcon'])
        .execute();

    const roomsWithUsers: Room[] = Object.values(
    rooms.reduce((acc: { [key: string]: Room }, room) => {
        if (!acc[room.id]) {
        acc[room.id] = {
            id: room.id,
            name: room.name,
            initialPoint: room.initialPoint,
            returnPoint: room.returnPoint,
            bonusPoint: room.bonusPoint,
            Rate: room.Rate,
            chipValue: room.chipValue,
            users: [],
        };
        }
        if (room.userId) {
        acc[room.id].users.push({
            id: room.userId,
            name: room.userName,
            icon: room.userIcon,
        });
        }
        return acc;
    }, {})
    );

    return { users: Users, rooms: roomsWithUsers };
}