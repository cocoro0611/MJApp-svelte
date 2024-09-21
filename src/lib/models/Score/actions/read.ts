import db from '$lib/models/db.js';
import type { User, Room, Score  } from "$lib/models/interface.js";

export async function readRooms(): Promise<Room[]> {
    const rooms = await db.selectFrom('Room')
        .select(['Room.id', 'Room.name', 'Room.createdAt', 'Room.initialPoint', 'Room.returnPoint', 'Room.bonusPoint', 'Room.Rate', 'Room.chipValue'])
        .leftJoin('RoomUser', 'Room.id', 'RoomUser.roomId')
        .leftJoin('User', 'RoomUser.userId', 'User.id')
        .select(['User.id as userId', 'User.name as userName', 'User.icon as userIcon', 'User.createdAt as userCreatedAt'])
        .select(['RoomUser.order as userOrder'])
        .orderBy("RoomUser.order", "asc")
        .execute();

    return Object.values(
        rooms.reduce((acc: { [key: string]: Room }, room) => {
            if (!acc[room.id]) {
                acc[room.id] = {
                    id: room.id,
                    name: room.name,
                    createdAt: room.createdAt,
                    users: [],
                    initialPoint: room.initialPoint,
                    returnPoint: room.returnPoint,
                    bonusPoint: room.bonusPoint,
                    Rate: room.Rate,
                    chipValue: room.chipValue,
                };
            }
            if (room.userId) {
                acc[room.id].users.push({
                    id: room.userId,
                    name: room.userName,
                    icon: room.userIcon,
                    createdAt: room.userCreatedAt,
                    order: room.userOrder, 
                });
            }
            return acc;
        }, {})
    );
}

export async function readScores(): Promise<Score[]> {
    const scores = await db.selectFrom('Score')
        .selectAll()
        .execute();

    return scores.map(score => ({
        id: score.id,
        createdAt: score.createdAt,
        order:score.order,
        score: score.score,
        chip: score.chip,
        roomId: score.roomId,
        userId: score.userId
    }));
}