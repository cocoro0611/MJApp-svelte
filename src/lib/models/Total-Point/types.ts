import type { User } from "$lib/models/Member/types.js";

export interface ButtonList {
    label: string;
    initialPoint?:  number,
    returnPoint?: number,
    bonusPoint?: string,
    Rate?: string,
    chipValue?: string,
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
    Rate: string;
    chipValue: string;
}

export interface Score {
    id: string;
    createdAt: Date;
    score: number | null;
    chip: number | null;
    roomId: string;
    userId: string;
}
