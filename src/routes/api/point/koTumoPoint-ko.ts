type PointMap = { [key: number]: number | null };

const pointMaps: { [key: number]: PointMap } = {
  1: {
    20: null,
    25: null,
    30: 300,
    40: 400,
    50: 400,
    60: 500,
    70: 600,
    80: 700,
    90: 800,
    100: 800,
    110: 900,
  },
  2: {
    20: 400,
    25: null,
    30: 500,
    40: 700,
    50: 800,
    60: 1000,
    70: 1200,
    80: 1300,
    90: 1500,
    100: 1600,
    110: 1800,
  },
  3: {
    20: 700,
    25: 800,
    30: 1000,
    40: 1300,
    50: 1600,
    60: 2000,
    70: 2000,
    80: 2000,
    90: 2000,
    100: 2000,
    110: 2000,
  },
  4: {
    20: 1300,
    25: 1600, 
    30: 2000,
    40: 2000,
    50: 2000,
    60: 2000,
    70: 2000,
    80: 2000,
    90: 2000,
    100: 2000,
    110: 2000,
  },
};

const limitHanPoints: [number, number, number][] = [
  [5, 5, 2000],
  [6, 7, 3000],
  [8, 10, 4000],
  [11, 12, 6000],
  [13, 25, 8000],
  [26, 38, 16000],
  [39, 51, 24000],
  [52, 64, 32000],
  [65, 77, 40000],
  [78, 90, 48000],
  [91, Infinity, 56000],
];

export function calculateKoTumoPoint_ko(fu: number, han: number) {
  if (han >= 1 && han <= 4) {
    return pointMaps[han][fu] ?? null;
  }

  for (const [minHan, maxHan, points] of limitHanPoints) {
    if (han >= minHan && han <= maxHan) {
      return points;
    }
  }
}
