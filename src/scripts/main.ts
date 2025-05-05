"use strict";

import {
  $form,
  $inputCardCVC,
  $inputCardExpireMonth,
  $inputCardExpireYear,
  $inputCardHolder,
  $inputCardNumber,
} from "./elements.js";

import {
  updateCardCardHolder,
  updateCardCardNumber,
  updateCardCVC,
  updateCardExpireMonth,
  updateCardExpireYear,
} from "./handlers/input.handlers.js";

if ($form) {
  $form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}

if ($inputCardHolder) {
  $inputCardHolder.addEventListener("input", function (e: Event) {
    updateCardCardHolder(e);
  });
}

if ($inputCardNumber) {
  $inputCardNumber.addEventListener("input", function (e: Event) {
    updateCardCardNumber(e);
  });
}

if ($inputCardExpireMonth) {
  $inputCardExpireMonth.addEventListener("input", function (e: Event) {
    updateCardExpireMonth(e);
  });
}

if ($inputCardExpireYear) {
  $inputCardExpireYear.addEventListener("input", function (e: Event) {
    updateCardExpireYear(e);
  });
}

if ($inputCardCVC) {
  $inputCardCVC.addEventListener("input", function (e: Event) {
    updateCardCVC(e);
  });
}
