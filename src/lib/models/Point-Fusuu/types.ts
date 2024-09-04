export interface ButtonList {
    label: string;
    fuVal: number;
    isSelected: boolean;
    isCount?: boolean;
    count?: number;
}

export interface PointData {
  oyaRonPoint: number;
  oyaTumoPoint: number;
  koRonPoint: number;
  koTumoPoint_oya: number;
  koTumoPoint_ko: number;
}