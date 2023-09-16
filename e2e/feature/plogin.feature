Feature: Login to Application

    As a valid user
    I want to login application

    Scenario: Valid Login
        Given I am on the login page
        When I do submit login
        Then I should displayed homepage