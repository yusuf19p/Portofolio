import CreditCardSuccess from "./CreditCardSuccess.page";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I select a product and proceed to checkout', () => {
    CreditCardSuccess.visit();
})

When('I choose credit card as the payment method and enter valid credit card details', () => {
    CreditCardSuccess.clickBuyNow();
    CreditCardSuccess.clickCheckout();
    CreditCardSuccess.clickCreditButton();
    CreditCardSuccess.fillCardNumber('4811111111111114');
    CreditCardSuccess.fillExpirationDate('11/25');
    CreditCardSuccess.fillCvvNumber('456');
    CreditCardSuccess.clickPayNow();
    CreditCardSuccess.fillPassword('112233');
    CreditCardSuccess.ok();
})

Then('Payment is successfully processed', () => {
    cy.get('.text-headline.medium').should('be.visible')
})