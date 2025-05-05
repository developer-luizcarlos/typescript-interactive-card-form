import {
  $smallErrorCardCVC,
  $smallErrorCardExpire,
  $smallErrorCardNumber,
  $spanCardCVC,
  $spanCardExpireMonth,
  $spanCardExpireYear,
  $spanCardHolder,
  $spanCardNumbers,
} from "../elements.js";

import { hasCardNumberError } from "../helpers/inputError.helper.js";

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

  if (hasCardNumberError(value)) {
    if ($smallErrorCardNumber) {
      $smallErrorCardNumber.classList.add("input-group__error-msg--visible");
      $smallErrorCardNumber.textContent =
        value.toString().length < 16 && !isNaN(value)
          ? "Enter the full card number"
          : "wrong format, numbers only";

      $spanCardNumbers?.forEach((cardNumber) => (cardNumber.textContent = "0"));
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

export function updateCardExpireMonth(e: Event) {
  const inputElement = e.target as HTMLInputElement;
  const value = inputElement.value;

  const isInvalidMonth =
    Number(value) === 0 || parseFloat(value) < 1 || parseFloat(value) > 12;

  if (isInvalidMonth) {
    if ($smallErrorCardExpire) {
      $smallErrorCardExpire.classList.add("input-group__error-msg--visible");
      $spanCardExpireMonth!.textContent = "00";
    }

    return;
  }

  if ($smallErrorCardExpire) {
    $smallErrorCardExpire.classList.remove("input-group__error-msg--visible");
    $smallErrorCardExpire.textContent = `Invalid month`;
  }

  if ($spanCardExpireMonth) {
    $spanCardExpireMonth.textContent = value.padStart(2, "0");
  }
}

export function updateCardExpireYear(e: Event) {
  const inputElement = e.target as HTMLInputElement;
  const value = inputElement.value;

  const invalidValue = Number(value) === 0;
  if (invalidValue) {
    if ($smallErrorCardExpire) {
      $smallErrorCardExpire.classList.add("input-group__error-msg--visible");
      $smallErrorCardExpire.textContent = `Can't be blank`;
      $spanCardExpireYear!.textContent = "00";
    }

    return;
  }

  if ($smallErrorCardExpire) {
    $smallErrorCardExpire.classList.remove("input-group__error-msg--visible");
  }

  if ($spanCardExpireYear) {
    $spanCardExpireYear.textContent = value.padStart(2, "0");
  }
}

export function updateCardCVC(e: Event) {
  const inputElement = e.target as HTMLInputElement;
  const value = inputElement.value;

  const isInvalidCVC =
    Number(value) === 0 || isNaN(Number(value)) || value.length < 3;

  if (isInvalidCVC) {
    if ($smallErrorCardCVC) {
      $smallErrorCardCVC.classList.add("input-group__error-msg--visible");
      $spanCardCVC!.textContent = "000";
    }

    return;
  }

  if ($smallErrorCardCVC) {
    $smallErrorCardCVC.classList.remove("input-group__error-msg--visible");
  }

  if ($spanCardCVC) {
    $spanCardCVC.textContent = value.padStart(3, "0");
  }
}
