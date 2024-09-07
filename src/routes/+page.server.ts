import db from '$lib/models/db.js';
import { v4 as uuidv4 } from 'uuid';
import type { PageServerLoad, Actions } from './$types.js';

import type { User } from "$lib/models/Member/types.js";

export const actions: Actions = {
    createForm: async (event: any) => {
        const formData = await event.request.formData();
        const userForm = {
            id: uuidv4(),
            name: formData.get('name'),
            icon: formData.get('icon'),
        };
        await db.insertInto('User').values(userForm).execute();
        return { success: true };
    },

    // deleteForm: async ({ request }) => {
    //     const data = await request.formData();
    //     const id = data.get('id') as string;

    //     if (!id) {
    //         throw error(400, 'IDが指定されていません');
    //     }

    //     await db.deleteFrom('Form').where('id', '=', id).execute();

    //     return { success: true };
    // },

    // updateForm: async ({request}) => {
    //     const data = await request.formData();
    //     const id = data.get('id');

    //     const updatedForm = {
    //         amount: data.get('amount'),
    //         category: data.get('category'),
    //         memo: data.get('memo'),
    //         date: data.get('date'),
    //         user1Amount: data.get('user1Amount'),
    //         user2Amount: data.get('user2Amount'),
    //         user1Paid: data.get('user1Paid'),
    //         user2Paid: data.get('user2Paid'),
    //         settled: data.get('settled') === 'true'
    // };
    //     const result = await db
    //         .updateTable('Form')
    //         .set(updatedForm)
    //         .where('id', '=', id)
    //         .executeTakeFirst();
    //     return { success: true };

    // },

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
        name: user.name,
        icon: user.icon
    }));

    return { users: Users };
}