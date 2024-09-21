import db from '$lib/models/db.js';
import type { Action } from '@sveltejs/kit';
import dayjs from 'dayjs';

export const updateScore: Action = async ({ request }) => {
    await db.transaction().execute(async (trx) => {
        const data = await request.formData();
        const roomId = data.get('roomId') as string;
        const scoreOrder = parseInt(data.get('scoreOrder') as string);
        const scores = data.getAll('score');
        const chips = data.getAll('chip');
        const userIds = data.getAll('userId');

        // 各ユーザーのスコアとチップを更新
        for (let i = 0; i < userIds.length; i++) {
            const scoreData = {
                score: parseInt(scores[i] as string) || null,
                chip: parseInt(chips[i] as string) || null,
                createdAt: dayjs().toDate(),
            };

            await trx
                .updateTable('Score')
                .set(scoreData)
                .where('roomId', '=', roomId)
                .where('userId', '=', userIds[i] as string)
                .where('order', '=', scoreOrder)
                .execute();
        }
    });
    return { success: true };
};