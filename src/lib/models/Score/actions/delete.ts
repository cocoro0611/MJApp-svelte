import db from '$lib/models/db.js';
import type { Action } from '@sveltejs/kit';

export const deleteRoom: Action = async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    const userIds = data.getAll('userIds');

    // Delete the associated Score records
    await db.deleteFrom('Score')
        .where('roomId', '=', id)
        .where('userId', 'in', userIds)
        .execute();

    // Delete the corresponding RoomUser records
    await db.deleteFrom('RoomUser')
        .where('roomId', '=', id)
        .where('userId', 'in', userIds)
        .execute();

    // Delete the room
    await db.deleteFrom('Room')
        .where('id', '=', id)
        .execute();

    return { success: true };
};