import type { User } from "$lib/models/Member/types.js";

export interface ButtonList {
    label: string;
    initialPoint?:  number,
    returnPoint?: number,
    bonusPoint?: string,
    Rate?: number,
    chipValue?: number,
    isSelected: boolean;
}

export interface Room {
    id: string;
    name: string;
    createdAt: Date;
    users: User[];
    initialPoint: number;
    returnPoint: number;
    bonusPoint: string;
    Rate: number;
    chipValue: number;
}

export interface Score {
    id: string;
    createdAt: Date;
    order:number
    score: number | null;
    chip: number | null;
    roomId: string;
    userId: string;
}
