/// <reference types ="cypress" />

import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY_NOW = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const VA = 'a[href="#/bank-transfer"]';
const BANK = 'a[href="#/bank-transfer/bni-va"]';
const BACK_BUTTON = '.primary';

class vaBNI {
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

  static clickBankTransfer() {
    this.getPaymentFrame().find(VA).click();
  }

  static clickVaBNI() {
    this.getPaymentFrame().find(BANK).click();
  }

  static clickBack() {
    this.getPaymentFrame().find(BACK_BUTTON).click();
  }
}

export default vaBNI;