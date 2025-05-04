"use strict";

import { $form, $inputCardHolder, $inputCardNumber } from "./elements.js";

import {
  updateCardCardHolder,
  updateCardCardNumber,
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
