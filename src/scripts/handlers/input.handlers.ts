import { $spanCardHolder, $spanCardNumbers } from "../elements.js";

export function updateCardCardHolder(e: Event) {
  if (!e) return;
  const inputElement = e.target as HTMLInputElement;
  const value = inputElement.value;

  if ($spanCardHolder) {
    $spanCardHolder.textContent = value !== "" ? value : "Jane Appleseed";
  }
}

export function updateCardCardNumber(e: Event) {
  if (!e) return;
  const inputElement = e.target as HTMLInputElement;
  const value = inputElement.value;

  if ($spanCardNumbers) {
    const cardNumbersLength = $spanCardNumbers.length;
    for (let i = 0; i < cardNumbersLength; i++) {
      $spanCardNumbers[i].textContent = value[i] || "0";
    }
  }
}
