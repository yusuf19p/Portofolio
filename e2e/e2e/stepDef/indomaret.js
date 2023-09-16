/// <reference types ="cypress" />
import indomaret from '../pageObject/indomaretPage';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the homepage:', function () {
    indomaret.visit();
})

When('I click on buy now:', () => {
    indomaret.clickBuyNow();
})

When('I click on checkout:', () => {
    indomaret.clickCheckout();
})

When('I click on Indomaret option:', () => {
    indomaret.getPaymentFrame();
    indomaret.clickIndomaret();
})

Then('I get payment code:', () => {
    indomaret.clickBack()
})

Then('I dont get payment code and I get error message "failed to load":', () => {
    indomaret.clickBack()
})