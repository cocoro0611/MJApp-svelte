export interface PointData {
  oyaRonPoint: number;
  oyaTumoPoint: number;
  koRonPoint: number;
  koTumoPoint_oya: number;
  koTumoPoint_ko: number;
}

export interface ButtonConfig {
  label: string;
  hanValue: number;
  fuValue: number;
  group: string;
  isDora?: boolean;
}
