
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import db from '$lib/models/db.js';
import type { Action } from '@sveltejs/kit';

export const createRoom: Action = async ({ request }) => {
    await db.transaction().execute(async (trx) => {
    const data = await request.formData();
    const roomForm = {
        id: uuidv4(),
        name: data.get('name'),
        createdAt: dayjs().toDate(),
        initialPoint: Number(data.get('initialPoint')),
        returnPoint: Number(data.get('returnPoint')),
        bonusPoint: Number(data.get('bonusPoint')),
        Rate: Number(data.get('Rate')),
        chipValue: Number(data.get('chipValue')),
    };
    await trx.insertInto('Room').values(roomForm).execute();

    const userIds = data.getAll('userId');
    const roomUsers = userIds.map(userId => ({
        userId,
        roomId: roomForm.id
    }));
    await trx.insertInto('RoomUser').values(roomUsers).execute();
  });
  return { success: true };
};
