type PointMap = { [key: number]: number | null };

const pointMaps: { [key: number]: PointMap } = {
  1: {
    20: null,
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
  2: {
    20: 700,
    25: null,
    30: 1000,
    40: 1300,
    50: 1600,
    60: 2000,
    70: 2300,
    80: 2600,
    90: 2900,
    100: 3200,
    110: 3600,
  },
  3: {
    20: 1300,
    25: 1600,
    30: 2000,
    40: 2600,
    50: 3200,
    60: 3900,
    70: 4000,
    80: 4000,
    90: 4000,
    100: 4000,
    110: 4000,
  },
  4: {
    20: 2600,
    25: 3200,
    30: 3900,
    40: 4000,
    50: 4000,
    60: 4000,
    70: 4000,
    80: 4000,
    90: 4000,
    100: 4000,
    110: 4000,
  },
};

const limitHanPoints: [number, number, number][] = [
  [5, 5, 4000],
  [6, 7, 6000],
  [8, 10, 8000],
  [11, 12, 12000],
  [13, 25, 18000],
  [26, 38, 32000],
  [39, 51, 48000],
  [52, 64, 64000],
  [65, 77, 80000],
  [78, 90, 96000],
  [91, Infinity, 112000],
];

export function calculateOyaTumoPoint(fu: number, han: number) {
  if (han >= 1 && han <= 4) {
    return pointMaps[han][fu] ?? null;
  }

  for (const [minHan, maxHan, points] of limitHanPoints) {
    if (han >= minHan && han <= maxHan) {
      return points;
    }
  }
}
