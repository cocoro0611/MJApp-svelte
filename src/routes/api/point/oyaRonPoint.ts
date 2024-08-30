type PointMap = { [key: number]: number | null };

const pointMaps: { [key: number]: PointMap } = {
  1: {
    20: null,
    25: null,
    30: 1500,
    40: 2000,
    50: 2400,
    60: 2900,
    70: 3400,
    80: 3900,
    90: 4400,
    100: 4800,
    110: 5300,
  },
  2: {
    20: null,
    25: 2400,
    30: 2900,
    40: 3900,
    50: 4800,
    60: 5800,
    70: 6800,
    80: 7700,
    90: 8700,
    100: 9600,
    110: 10600,
  },
  3: {
    20: null,
    25: 4800,
    30: 5800,
    40: 7700,
    50: 9600,
    60: 11600,
    70: 12000,
    80: 12000,
    90: 12000,
    100: 12000,
    110: 12000,
  },
  4: {
    20: null,
    25: 9600,
    30: 11600,
    40: 12000,
    50: 12000,
    60: 12000,
    70: 12000,
    80: 12000,
    90: 12000,
    100: 12000,
    110: 12000,
  },
};

const limitHanPoints: [number, number, number][] = [
  [5, 5, 12000],
  [6, 7, 18000],
  [8, 10, 24000],
  [11, 12, 36000],
  [13, 25, 48000],
  [26, 38, 96000],
  [39, 51, 144000],
  [52, 64, 192000],
  [65, 77, 240000],
  [78, 90, 288000],
  [91, Infinity, 336000],
];

export function calculateOyaRonPoint(fu: number, han: number) {
  if (han >= 1 && han <= 4) {
    return pointMaps[han][fu] ?? null;
  }

  for (const [minHan, maxHan, points] of limitHanPoints) {
    if (han >= minHan && han <= maxHan) {
      return points;
    }
  }
}
