/// <reference types ="cypress" />


const URL = 'https://demo.midtrans.com/';
const BUY_NOW = '.buy';
const CHECKOUT = '.cart-checkout';
const CREDIT_BUTTON = 'iframe#snap-midtrans';
const CARD_NUMBER = '.valid-input-value';
const EXPIRATION_DATE = '#card-expiry-cvv';
const CARD_CVV = '#card-cvv';
const PAY_NOW = '.btn.full.primary.btn-theme';
const PASSWORD = '#otp';
const OK = '.btn.btn-sm.btn-success';

class CreditCard {
    static visit() {
        cy.visit(URL);
    }

    static clickBuyNow() {
        cy.get(BUY_NOW).click();
    }

    static clickCheckout() {
        cy.get(CHECKOUT).click();
    }  

    static clickCreditButton() {
        cy.get(CREDIT_BUTTON).click();
    }

    static fillCardNumber(number) {
        cy.get(CARD_NUMBER).type(number);
    }

    static fillExpirationDate(date) {
        cy.get(EXPIRATION_DATE).type(date);
    }

    static fillCvvNumber(cvv) {
        cy.get(CARD_CVV).type(cvv);
    }

    static clickPayNow() {
        cy.contains(PAY_NOW).click();
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
    }

    static clickOk() {
        cy.contains(OK).click();
    }
}

export default CreditCard
