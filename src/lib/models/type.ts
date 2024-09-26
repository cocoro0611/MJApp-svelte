export interface User {
  id: string;
  name: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Score {
  id: string;
  input: number;
  score: number;
  count: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  roomId: string;
}

export interface Chip {
  id: string;
  input: number;
  chip: number;
  count: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  roomId: string;
}

export interface RoomUser {
  userId: string;
  roomId: string;
  order: number;
  createdAt: Date;
}

export interface Room {
  id: string;
  name: string;
  initialPoint: number;
  returnPoint: number;
  bonusPoint: string;
  scoreRate: number;
  chipRate: number;
  gameAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
