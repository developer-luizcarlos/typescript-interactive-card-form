"use strict";
export const $inputCardHolder: HTMLInputElement | null =
  document.querySelector("#input-cardholder");
export const $inputCardNumber: HTMLInputElement | null =
  document.querySelector("#input-card-number");
export const $inputCardExpireMonth: HTMLInputElement | null =
  document.querySelector("#input-card-month");
export const $inputCardExpireYear: HTMLInputElement | null =
  document.querySelector("#input-card-year");
export const $inputCardCVC: HTMLInputElement | null =
  document.querySelector("#input-card-cvc");
export const $smallErrorCardNumber: HTMLElement | null =
  document.querySelector("#error-card-number");
export const $smallErrorCardExpire: HTMLElement | null =
  document.querySelector("#error-card-expire");
export const $smallErrorCardCVC: HTMLElement | null =
  document.querySelector("#error-card-cvc");
export const $btnSubmit: HTMLButtonElement | null =
  document.querySelector(".btn");
export const $form: HTMLFormElement | null = document.querySelector(".form");
export const $spanCardNumbers: NodeList | null =
  document.querySelectorAll(".card__number");
export const $spanCardHolder: HTMLElement | null =
  document.querySelector(".card__cardholder");
export const $spanCardExpireDate: HTMLElement | null =
  document.querySelector(".card__expire-date");
export const $spanCardExpireMonth: HTMLElement | null =
  document.querySelector("#expire-month");
export const $spanCardExpireYear: HTMLElement | null =
  document.querySelector("#expire-year");
