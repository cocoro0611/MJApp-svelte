import db from '$lib/models/db.js';
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import type { PageServerLoad, Actions } from './$types.js';

import type { User } from "$lib/models/Member/types.js";
import type { Room, Score } from "$lib/models/Total-Point/types.js";

export const actions: Actions = {
    createUser: async ({request}) => {
        const data = await request.formData();
        const userForm = {
            id: uuidv4(),
            name: data.get('name'),
            icon: data.get('icon'),
            createdAt: dayjs(),
        };
        await db.insertInto('User').values(userForm).execute();
        return { success: true };
    },

    createRoom: async ({request}) => {
        const data = await request.formData();
        const roomForm = {
            id: uuidv4(),
            name: data.get('name'),
            createdAt: dayjs(),
            initialPoint: data.get('initialPoint'),
            returnPoint: data.get('returnPoint'),
            bonusPoint: data.get('bonusPoint'),
            Rate: data.get('Rate'),
            chipValue: data.get('chipValue'),
        };
        await db.insertInto('Room').values(roomForm).execute();

        const userIds = data.getAll('userId');
        const roomUsers = userIds.map(userId => ({
            userId,
            roomId:roomForm.id
        }));
        await db.insertInto('RoomUser').values(roomUsers).execute();

        return { success: true };
    },

    updateUser: async ({request}) => {
        const data = await request.formData();
        const id = data.get('id');
        const updatedUserForm = {
            name: data.get('name'),
            icon: data.get('icon'),
            createdAt: dayjs(),
        };
        await db.updateTable('User').set(updatedUserForm).where('id', '=', id).executeTakeFirst();
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
        .orderBy("User.createdAt","asc")
        .execute();

    const Users: User[] = users.map(user => ({
        id: user.id,
        name: user.name,
        icon: user.icon,
        createdAt: user.createdAt
    }));

    const rooms = await db.selectFrom('Room')
        .select(['Room.id', 'Room.name', 'Room.createdAt', 'Room.initialPoint', 'Room.returnPoint', 'Room.bonusPoint', 'Room.Rate', 'Room.chipValue'])
        .leftJoin('RoomUser', 'Room.id', 'RoomUser.roomId')
        .leftJoin('User', 'RoomUser.userId', 'User.id')
        .select(['User.id as userId', 'User.name as userName', 'User.icon as userIcon', 'User.createdAt as userCreatedAt'])
        .orderBy("Room.createdAt","asc")
        .execute();

    const roomsWithUsers: Room[] = Object.values(
        rooms.reduce((acc: { [key: string]: Room }, room) => {
            if (!acc[room.id]) {
                acc[room.id] = {
                    id: room.id,
                    name: room.name,
                    createdAt: room.createdAt,
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
                    createdAt: room.userCreatedAt,
                });
            }
            return acc;
        }, {})
    );

    // const scores = await db.selectFrom('Score')
    //     .select(['Score.id', 'Score.createdAt', 'Score.score', 'Score.chip'])
    //     .leftJoin('User', 'User.id', 'Score.userId')
    //     .leftJoin('Room', 'Room.id', 'Score.roomId')
    //     .select(['User.id as userId', 'User.name as userName', 'User.icon as userIcon', 'User.createdAt as userCreatedAt'])
    //     .select(['Room.id as roomId', 'Room.name as roomName', 'Room.createdAt as roomCreatedAt', 'Room.initialPoint', 'Room.returnPoint', 'Room.bonusPoint', 'Room.Rate', 'Room.chipValue'])
    //     .execute();

    // return scores.map(score => ({
    //     id: score.id,
    //     createdAt: score.createdAt,
    //     score: score.score,
    //     chip: score.chip,
    //     user: {
    //         id: score.userId,
    //         name: score.userName,
    //         icon: score.userIcon,
    //         createdAt: score.userCreatedAt
    //     },
    //     room: {
    //         id: score.roomId,
    //         name: score.roomName,
    //         createdAt: score.roomCreatedAt,
    //         initialPoint: score.initialPoint,
    //         returnPoint: score.returnPoint,
    //         bonusPoint: score.bonusPoint,
    //         Rate: score.Rate,
    //         chipValue: score.chipValue
    //     }
    // }));

    return { users: Users, rooms: roomsWithUsers };
};