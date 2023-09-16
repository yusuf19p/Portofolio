/// <reference types ="cypress" />
import vaBNI from '../pageObject/vaBNIpage';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the homepage,', function () {
    vaBNI.visit();
})

When('I click on buy now,', () => {
    vaBNI.clickBuyNow();
})

When('I click on checkout,', () => {
    vaBNI.clickCheckout();
})

When('I click on virtual account option,', () => {
    vaBNI.getPaymentFrame();
    vaBNI.clickBankTransfer();
})

When('I click on bank BNI,', () => {
    vaBNI.clickVaBNI()
})

Then('I get BNI VA number,', () => {
    vaBNI.clickBack()
})

Then('I dont get BNI VA number and I get error message "failed to load",', () => {
    vaBNI.clickBack()
})