import type { User } from "$lib/models/Member/types.js";
export interface ButtonList {
    label: string;
    initialPoint?:  number,
    returnPoint?: number,
    bonusPoint?: string,
    Rate?: string,
    chipValue?: String,
    isSelected: boolean;
}

export interface Room {
    id: string
    name: string;
    createdAt: Date;
    users: User[]
    initialPoint: number //持ち点
    returnPoint: number //返し点
    bonusPoint: String //ウマ
    Rate: String //レート
    chipValue: String //チップ単価
}
