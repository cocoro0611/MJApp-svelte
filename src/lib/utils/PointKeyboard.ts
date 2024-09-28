export function updateInput(input: number, newInput: number) {
  return newInput;
}

export function addDigit(input: number, digit: number) {
  const currentStr = Math.abs(input).toString();
  if (currentStr.length < 4) {
    return input === 0
      ? digit
      : Number(`${Math.abs(input)}${digit}`) * (input < 0 ? -1 : 1);
  }
  return input;
}

export function toggleSign(input: number) {
  return -input;
}

export function backspace(input: number) {
  return Math.floor(Math.abs(input) / 10) * (input < 0 ? -1 : 1);
}
