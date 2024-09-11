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
    id: string;
    name: string;
    createdAt: Date;
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
