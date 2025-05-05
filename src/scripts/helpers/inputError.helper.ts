export function hasCardNumberError(value: number): boolean {
  const isInvalidValue =
    isNaN(value) || value === 0 || value.toString().length < 16;
  return isInvalidValue;
}
