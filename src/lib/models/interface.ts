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
  initialPoint?: number;
  returnPoint?: number;
  bonusPoint?: string;
  gameRate?: number;
  chipValue?: number;
  isSelected: boolean;
}

export interface User {
  id: string;
  name: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RoomUser {
  userId: string;
  roomId: string;
  order: number;
  gamesNumber: number;
  createdAt: Date;
}

export interface Room {
  id: string;
  name: string;
  initialPoint: number;
  returnPoint: number;
  bonusPoint: string;
  gameRate: number;
  chipValue: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Score {
  id: string;
  score: number;
  chip: number | null;
  createdAt: Date;
  updatedAt: Date;
  roomId: string;
  userId: string;
}
