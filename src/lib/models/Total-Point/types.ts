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
    // users: User[]
    initialPoint: number
    returnPoint: number
    bonusPoint: String
    Rate: String
    chipValue: String
}
