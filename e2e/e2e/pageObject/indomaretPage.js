/// <reference types ="cypress" />

import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY_NOW = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const INDOMARET = 'a[href="#/indomaret"]';
const BACK_BUTTON = '.primary';

class indomaret {
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

  static clickIndomaret() {
    this.getPaymentFrame().find(INDOMARET).click();
  }

  static clickBack() {
    this.getPaymentFrame().find(BACK_BUTTON).click();
  }
}

export default indomaret;