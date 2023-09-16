Feature: Credit Card Payment

    As a user with valid credit card
    I want to checkout using credit card payment

    Scenario: Successful credit card payment
        Given I select a product and proceed to checkout
        When I choose credit card as the payment method and enter valid credit card details
        Then Payment is successfully processed