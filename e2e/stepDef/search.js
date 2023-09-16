import SearchPage from "./search.page";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I am on the homepage', () => {
    SearchPage.visit();
})

When('I enter "banking" in the search field and I click on the search button', () => {
    SearchPage.search('banking {enter}')
})

Then('I should see search results related to "banking"', () => {
    cy.get('li > a').should('contain.text', 'Zero - Personal Banking - Loans - Credit Cards')
})