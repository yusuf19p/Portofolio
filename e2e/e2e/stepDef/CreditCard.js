/// <reference types ="cypress" />

import CreditCard from "../pageObject/CreditCardpage";
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage', () => {
    CreditCard.visit()
})

When('I click on buy now', () => {
    CreditCard.clickBuyNow()
})

When('I click on checkout', () => {
    CreditCard.clickCheckout()
})

When('I click on credit card payment option', () => {
    CreditCard.clickCreditButton()
})

When('I fill card number with {string}', number => {
    CreditCard.fillCardNumber(number)
})

When('I fill expiration date with {string}', date => {
    CreditCard.fillExpirationDate(date)
})

When('I fill cvv with {string}', cvv => {
    CreditCard.fillCvvNumber(cvv)
})

When('I click on pay now', () => {
    CreditCard.clickPayNow()
})

When('I fill password with {string}', password => {
    CreditCard.fillPassword(password)
})

When('I click on ok', () => {
    CreditCard.clickOk()
})

Then('I should see successfull payment message', () => {
    cy.get('.text-headline.medium').should('be.visible')
})

Then('I should see error message', () => {
    cy.get('.card-warning.text-failed').should('be.visible')
});