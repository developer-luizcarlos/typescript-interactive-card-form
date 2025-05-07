export function hasCardNumberError(value: number): boolean {
  const isInvalidValue =
    isNaN(value) || value === 0 || value.toString().length < 16;
  return isInvalidValue;
}

export function hasCardExpireMonthError(value: number): boolean {
  const isInvalidMonth = value === 0 || value < 1 || value > 12 || isNaN(value);
  return isInvalidMonth;
}
