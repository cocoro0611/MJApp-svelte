export interface PointData {
    oyaRonPoint: number;
    oyaTumoPoint: number;
    koRonPoint: number;
    koTumoPoint_oya: number;
    koTumoPoint_ko: number;
}

export interface CountButtonList {
    label: string;
    value: number;
    isSelected: boolean;
    isCount?: boolean;
    count?: number;
}

export interface ScoreButtonList {
    label: string;
    initialPoint?:  number,
    returnPoint?: number,
    bonusPoint?: string,
    Rate?: number,
    chipValue?: number,
    isSelected: boolean;
}

export interface User {
    id:string
    name: string;
    icon: string;
    createdAt: string | Date;
    order?: Number; //ユーザ番号の管理
}

export interface Room {
    id: string;
    name: string;
    createdAt: string | Date;
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
