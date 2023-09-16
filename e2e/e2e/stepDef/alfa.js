/// <reference types ="cypress" />
import alfa from '../pageObject/alfaPage';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the homepage|', function () {
    alfa.visit();
})

When('I click on buy now|', () => {
    alfa.clickBuyNow();
})

When('I click on checkout|', () => {
    alfa.clickCheckout();
})

When('I click on Alfa option|', () => {
    alfa.getPaymentFrame();
    alfa.clickAlfa();
})

Then('I get payment code|', () => {
    alfa.clickBack()
})

Then('I dont get payment code and I get error message "failed to load"|', () => {
    alfa.clickBack()
})