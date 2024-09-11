import db from '$lib/models/db.js';
import type { Room } from "$lib/models/Total-Point/types.js";

export async function readRooms(): Promise<Room[]> {
    const rooms = await db.selectFrom('Room')
        .select(['Room.id', 'Room.name', 'Room.createdAt', 'Room.initialPoint', 'Room.returnPoint', 'Room.bonusPoint', 'Room.Rate', 'Room.chipValue'])
        .leftJoin('RoomUser', 'Room.id', 'RoomUser.roomId')
        .leftJoin('User', 'RoomUser.userId', 'User.id')
        .select(['User.id as userId', 'User.name as userName', 'User.icon as userIcon', 'User.createdAt as userCreatedAt'])
        .orderBy("Room.createdAt", "asc")
        .execute();

    return Object.values(
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
}


// import db from '$lib/models/db.js';
// import type { Room, Score } from "$lib/models/Total-Point/types.js";
// import type { User } from '$lib/models/Member/types.js';

// export async function readRooms(): Promise<Room[]> {
//     const rooms = await db.selectFrom('Room')
//         .select([
//             'Room.id',
//             'Room.name',
//             'Room.createdAt',
//             'Room.initialPoint',
//             'Room.returnPoint',
//             'Room.bonusPoint',
//             'Room.Rate',
//             'Room.chipValue'
//         ])
//         .leftJoin('RoomUser', 'Room.id', 'RoomUser.roomId')
//         .leftJoin('User', 'RoomUser.userId', 'User.id')
//         .leftJoin('Score', eb => 
//             eb.on('RoomUser.roomId', '=', 'Score.roomId')
//                 .on('RoomUser.userId', '=', 'Score.userId')
//         )
//         .select([
//             'User.id as userId',
//             'User.name as userName',
//             'User.icon as userIcon',
//             'User.createdAt as userCreatedAt',
//             'Score.id as scoreId',
//             'Score.score',
//             'Score.chip',
//             'Score.createdAt as scoreCreatedAt'
//         ])
//         .orderBy("Room.createdAt", "asc")
//         .execute();

//     return Object.values(
//         rooms.reduce((acc: { [key: string]: Room & { users: (User & { scores: Score[] })[] } }, room) => {
//             if (!acc[room.id]) {
//                 acc[room.id] = {
//                     id: room.id,
//                     name: room.name,
//                     createdAt: room.createdAt,
//                     initialPoint: room.initialPoint,
//                     returnPoint: room.returnPoint,
//                     bonusPoint: room.bonusPoint,
//                     Rate: room.Rate,
//                     chipValue: room.chipValue,
//                     users: [],
//                 };
//             }
//             if (room.userId) {
//                 const existingUser = acc[room.id].users.find(user => user.id === room.userId);
//                 if (existingUser) {
//                     if (room.scoreId && !existingUser.scores.some(score => score.id === room.scoreId)) {
//                         existingUser.scores.push({
//                             id: room.scoreId,
//                             score: room.score,
//                             chip: room.chip,
//                             createdAt: room.scoreCreatedAt,
//                             userId: room.userId,
//                             roomId: room.id
//                         });
//                     }
//                 } else {
//                     acc[room.id].users.push({
//                         id: room.userId,
//                         name: room.userName,
//                         icon: room.userIcon,
//                         createdAt: room.userCreatedAt,
//                         scores: room.scoreId ? [{
//                             id: room.scoreId,
//                             score: room.score,
//                             chip: room.chip,
//                             createdAt: room.scoreCreatedAt,
//                             userId: room.userId,
//                             roomId: room.id
//                         }] : []
//                     });
//                 }
//             }
//             return acc;
//         }, {})
//     );
// }

// export async function readScores(): Promise<(Score & { user: User, room: Room })[]> {
//     const scores = await db.selectFrom('Score')
//         .select([
//             'Score.id',
//             'Score.createdAt',
//             'Score.score',
//             'Score.chip',
//             'Score.roomId',
//             'Score.userId'
//         ])
//         .leftJoin('RoomUser', eb => eb.on('Score.roomId', '=', 'RoomUser.roomId').on('Score.userId', '=', 'RoomUser.userId'))
//         .leftJoin('User', 'RoomUser.userId', 'User.id')
//         .leftJoin('Room', 'RoomUser.roomId', 'Room.id')
//         .select([
//             'User.id as userId',
//             'User.name as userName',
//             'User.icon as userIcon',
//             'User.createdAt as userCreatedAt'
//         ])
//         .select([
//             'Room.id as roomId',
//             'Room.name as roomName',
//             'Room.createdAt as roomCreatedAt',
//             'Room.initialPoint',
//             'Room.returnPoint',
//             'Room.bonusPoint',
//             'Room.Rate',
//             'Room.chipValue'
//         ])
//         .execute();

//     return scores.map(score => ({
//         id: score.id,
//         createdAt: score.createdAt,
//         score: score.score,
//         chip: score.chip,
//         roomId: score.roomId,
//         userId: score.userId,
//         user: {
//             id: score.userId,
//             name: score.userName,
//             icon: score.userIcon,
//             createdAt: score.userCreatedAt
//         },
//         room: {
//             id: score.roomId,
//             name: score.roomName,
//             createdAt: score.roomCreatedAt,
//             initialPoint: score.initialPoint,
//             returnPoint: score.returnPoint,
//             bonusPoint: score.bonusPoint,
//             Rate: score.Rate,
//             chipValue: score.chipValue
//         }
//     }));
// }