/// <reference types ="cypress" />

import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY_NOW = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const QRIS = 'a[href="#/other-qris"]';
const BACK_BUTTON = '.primary';

class qris {
  static visit() {
    cy.visit(URL);
  }

  static clickBuyNow() {
    cy.get(BUY_NOW).click();
  }

  static clickCheckout() {
    cy.get(CHECKOUT).click();
  }

  static getPaymentFrame() {
    return cy.get(PAYMENT).iframe();
  }

  static clickQris() {
    this.getPaymentFrame().find(QRIS).click();
  }

  static clickBack() {
    this.getPaymentFrame().find(BACK_BUTTON).click();
  }
}

export default qris;