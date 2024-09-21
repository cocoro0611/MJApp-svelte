import db from '$lib/models/db.js';
import type { User } from "$lib/models/interface.js";

export async function readUsers(): Promise<User[]> {
    const users = await db.selectFrom('User')
        .selectAll()
        .orderBy("User.createdAt", "asc")
        .execute();

    return users.map(user => ({
        id: user.id,
        name: user.name,
        icon: user.icon,
        createdAt: user.createdAt
    }));
}