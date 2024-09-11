import db from '$lib/models/db.js';
import type { Action } from '@sveltejs/kit';

export const updateUser: Action = async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');

    const updateData = {
        name: data.get('name'),
        icon: data.get('icon'),
    };

    await db.updateTable('User')
        .set(updateData)
        .where('id', '=', id)
        .execute();

    return { success: true };
};