export function formatFuValue(value: number): number {
  if (value === 20) return 20;
  if (value === 25) return 25;
  const fuRanges = [
    { min: 20, max: 30, output: 30 },
    { min: 30, max: 40, output: 40 },
    { min: 40, max: 50, output: 50 },
    { min: 50, max: 60, output: 60 },
    { min: 60, max: 70, output: 70 },
    { min: 70, max: 80, output: 80 },
    { min: 80, max: 90, output: 90 },
    { min: 90, max: 100, output: 100 },
    { min: 100, max: Infinity, output: 110 },
  ];
  for (const range of fuRanges) {
    if (value > range.min && value <= range.max) {
      return range.output;
    }
  }
  return value;
}
