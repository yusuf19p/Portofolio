/// <reference types ="cypress" />
import vaMandiri from '../pageObject/vaMandiriPage';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the homepage.', function () {
    vaMandiri.visit();
})

When('I click on buy now.', () => {
    vaMandiri.clickBuyNow();
})

When('I click on checkout.', () => {
    vaMandiri.clickCheckout();
})

When('I click on virtual account option.', () => {
    vaMandiri.getPaymentFrame();
    vaMandiri.clickBankTransfer();
})

When('I click on bank mandiri.', () => {
    vaMandiri.clickVaMandiri()
})

Then('I get company code and Mandiri VA number.', () => {
    vaMandiri.clickBack()
})

Then('I dont get Mandiri VA number and I get error message "failed to load".', () => {
    vaMandiri.clickBack()
})