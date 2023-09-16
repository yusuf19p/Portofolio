/// <reference types ="cypress" />
import qris from '../pageObject/qrisPage';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the homepage;', function () {
    qris.visit();
})

When('I click on buy now;', () => {
    qris.clickBuyNow();
})

When('I click on checkout;', () => {
    qris.clickCheckout();
})

When('I click on QRIS option;', () => {
    qris.getPaymentFrame();
    qris.clickQris();
})

Then('I get QR code;', () => {
    qris.clickBack()
})

Then('I dont get QR code and I get error message "failed to load QR";', () => {
    qris.clickBack()
})