const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I am on the login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html',{timeout:50000});
})

When('I do submit login', () => {
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
})

Then('I should displayed homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible')
})