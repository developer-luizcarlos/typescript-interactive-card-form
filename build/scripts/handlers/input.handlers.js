import { $smallErrorCardCVC, $smallErrorCardExpire, $smallErrorCardNumber, $spanCardCVC, $spanCardExpireMonth, $spanCardExpireYear, $spanCardHolder, $spanCardNumbers, } from "../elements.js";
export function updateCardCardHolder(e) {
    if (!e)
        return;
    const inputElement = e.target;
    const value = inputElement.value;
    if ($spanCardHolder) {
        $spanCardHolder.textContent = value !== "" ? value : "Jane Appleseed";
    }
}
export function updateCardCardNumber(e) {
    if (!e)
        return;
    const inputElement = e.target;
    const value = Number(inputElement.value);
    const isValueNaNOrEmpty = isNaN(value) || value === 0;
    if (isValueNaNOrEmpty) {
        if ($smallErrorCardNumber) {
            $smallErrorCardNumber.classList.add("input-group__error-msg--visible");
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
export function updateCardExpireMonth(e) {
    const inputElement = e.target;
    const value = inputElement.value;
    const isInvalidMonth = Number(value) === 0 || parseFloat(value) < 1 || parseFloat(value) > 12;
    if (isInvalidMonth) {
        if ($smallErrorCardExpire) {
            $smallErrorCardExpire.classList.add("input-group__error-msg--visible");
            $spanCardExpireMonth.textContent = "00";
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
export function updateCardExpireYear(e) {
    const inputElement = e.target;
    const value = inputElement.value;
    const invalidValue = Number(value) === 0;
    if (invalidValue) {
        if ($smallErrorCardExpire) {
            $smallErrorCardExpire.classList.add("input-group__error-msg--visible");
            $smallErrorCardExpire.textContent = `Can't be blank`;
            $spanCardExpireYear.textContent = "00";
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
export function updateCardCVC(e) {
    const inputElement = e.target;
    const value = inputElement.value;
    const isInvalidCVC = Number(value) === 0 || isNaN(Number(value)) || value.length < 3;
    if (isInvalidCVC) {
        if ($smallErrorCardCVC) {
            $smallErrorCardCVC.classList.add("input-group__error-msg--visible");
            $spanCardCVC.textContent = "000";
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
