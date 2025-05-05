"use strict";
import { $form, $inputCardExpireMonth, $inputCardExpireYear, $inputCardHolder, $inputCardNumber, } from "./elements.js";
import { updateCardCardHolder, updateCardCardNumber, updateCardExpireMonth, updateCardExpireYear, } from "./handlers/input.handlers.js";
if ($form) {
    $form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
}
if ($inputCardHolder) {
    $inputCardHolder.addEventListener("input", function (e) {
        updateCardCardHolder(e);
    });
}
if ($inputCardNumber) {
    $inputCardNumber.addEventListener("input", function (e) {
        updateCardCardNumber(e);
    });
}
if ($inputCardExpireMonth) {
    $inputCardExpireMonth.addEventListener("input", function (e) {
        updateCardExpireMonth(e);
    });
}
if ($inputCardExpireYear) {
    $inputCardExpireYear.addEventListener("input", function (e) {
        updateCardExpireYear(e);
    });
}
