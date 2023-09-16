const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Im on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html',{timeout:50000});
})

When('I enter "banking" in the search field and I click on search button', () => {
    cy.get('#searchTerm').type('banking {enter}')
})

Then('I should displayed search results related to "banking"', () => {
    cy.get('li > a').should('contain.text', 'Zero - Personal Banking - Loans - Credit Cards')
})