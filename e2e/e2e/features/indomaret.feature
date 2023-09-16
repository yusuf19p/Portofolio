Feature: Make a payment with Indomaret

    As a valid user with poor or unavailable connection
    i want to make a payment with Indomaret
    
    As a valid user
    i want to make a payment with Indomaret

    Scenario: Payment unsuccessful
        Given I am on the homepage:
        When I click on buy now:
        And I click on checkout:
        And I click on Indomaret option:
        Then I dont get payment code and I get error message "failed to load":


    Scenario: Payment successful
        Given I am on the homepage:
        When I click on buy now:
        And I click on checkout:
        And I click on Indomaret option:
        Then I get payment code: