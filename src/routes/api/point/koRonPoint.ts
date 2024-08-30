type PointMap = { [key: number]: number | null };

const pointMaps: { [key: number]: PointMap } = {
  1: {
    20: null,
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
  2: {
    20: null,
    25: 1600,
    30: 2000,
    40: 2600,
    50: 3200,
    60: 3900,
    70: 4500,
    80: 5200,
    90: 5800,
    100: 6400,
    110: 7100,
  },
  3: {
    20: null,
    25: 3200,
    30: 3900,
    40: 5200,
    50: 6400,
    60: 7700,
    70: 8000,
    80: 8000,
    90: 8000,
    100: 8000,
    110: 8000,
  },
  4: {
    20: null,
    25: 6400,
    30: 7700,
    40: 8000,
    50: 8000,
    60: 8000,
    70: 8000,
    80: 8000,
    90: 8000,
    100: 8000,
    110: 8000,
  },
};

const limitHanPoints: [number, number, number][] = [
  [5, 5, 8000],
  [6, 7, 12000],
  [8, 10, 16000],
  [11, 12, 24000],
  [13, 25, 32000],
  [26, 38, 64000],
  [39, 51, 96000],
  [52, 64, 128000],
  [65, 77, 160000],
  [78, 90, 192000],
  [91, Infinity, 224000],
];

export function calculateKoRonPoint(fu: number, han: number) {
  if (han >= 1 && han <= 4) {
    return pointMaps[han][fu] ?? null;
  }

  for (const [minHan, maxHan, points] of limitHanPoints) {
    if (han >= minHan && han <= maxHan) {
      return points;
    }
  }
}
