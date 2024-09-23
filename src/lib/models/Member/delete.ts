import db from '$lib/models/db.js';
import type { Action } from '@sveltejs/kit';

export const deleteUser: Action = async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');

    await db.deleteFrom('User')
        .where('id', '=', id)
        .execute();

    return { success: true };
};
