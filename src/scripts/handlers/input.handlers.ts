import {
  $smallErrorCardNumber,
  $spanCardHolder,
  $spanCardNumbers,
} from "../elements.js";

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
  const value = Number(inputElement.value);
  const isValueNaNOrEmpty = isNaN(value) || value === 0;

  if (isValueNaNOrEmpty) {
    if ($smallErrorCardNumber) {
      $smallErrorCardNumber.classList.add("input-group__error-msg--visible");
    }

    return;
  }

  if ($smallErrorCardNumber) {
    $smallErrorCardNumber.classList.remove("input-group__error-msg--visible");
  }

  if ($spanCardNumbers) {
    const cardNumbersLength = $spanCardNumbers.length;
    for (let i = 0; i < cardNumbersLength; i++) {
      $spanCardNumbers[i].textContent = value.toString()[i] || "0";
    }
  }
}
