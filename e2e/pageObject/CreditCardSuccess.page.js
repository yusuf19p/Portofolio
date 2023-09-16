const URL = 'https://demo.midtrans.com/';
const BUY_NOW = '.btn.buy';
const CHECKOUT = '#cart_checkout';
const CREDIT_BUTTON = 'a[href*="#/credit-card"]';
const CARD_NUMBER = '.valid-input-value';
const EXPIRATION_DATE = '#card-expiry-cvv';
const CARD_CVV = '#card-cvv';
const PAY_NOW = '.btn.full.primary.btn-theme';
const PASSWORD = '#otp';
const OK = '.btn.btn-sm.btn-success';


class CreditCardSuccess {
    static visit() {
        cy.visit(URL);
    }

    static clickBuyNow() {
        cy.contains(BUY_NOW).click();
    }

    static clickCheckout() {
        cy.contains(CHECKOUT).click();
    }

    static clickCreditButton() {
        cy.contains(CREDIT_BUTTON).click();
    }

    static fillCardNumber() {
        cy.get(CARD_NUMBER).type('4811111111111114');
    }

    static fillExpirationDate() {
        cy.get(EXPIRATION_DATE).type('11/25');
    }

    static fillCvvNumber() {
        cy.get(CARD_CVV).type('456');
    }

    static clickPayNow() {
        cy.contains(PAY_NOW).click();
    }

    static fillPassword() {
        cy.get(PASSWORD).type('112233');
    }

    static ok() {
        cy.contains(OK).click();
    }
}

export default CreditCardSuccess
