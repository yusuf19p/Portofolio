/// <reference types ="cypress" />

import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY_NOW = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const ALFA = 'a[href="#/alfamart"]';
const BACK_BUTTON = '.primary';

class alfa {
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

  static clickAlfa() {
    this.getPaymentFrame().find(ALFA).click();
  }

  static clickBack() {
    this.getPaymentFrame().find(BACK_BUTTON).click();
  }
}

export default alfa;