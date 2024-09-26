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
