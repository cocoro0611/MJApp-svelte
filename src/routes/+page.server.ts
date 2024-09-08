import db from '$lib/models/db.js';
import { v4 as uuidv4 } from 'uuid';
import type { PageServerLoad, Actions } from './$types.js';

import type { User } from "$lib/models/Member/types.js";

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

    // settleForm: async ({request}) => {
    //         const data = await request.formData();
    //         const ids = data.getAll('ids');
    //         await db
    //         .updateTable('Form')
    //         .set({ settled: true })
    //         .where('id', 'in', ids)
    //         .execute();
    //     return { success: true };
    // }
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

    return { users: Users };
}