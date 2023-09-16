Feature: Make a payment with VA Mandiri

    As a valid user with poor or unavailable connection
    i want to make a payment with Mandiri VA
    
    As a valid user
    i want to make a payment with Mandiri VA

    Scenario: Payment unsuccessful
        Given I am on the homepage.
        When I click on buy now.
        And I click on checkout.
        And I click on virtual account option.
        And I click on bank mandiri.
        Then I dont get Mandiri VA number and I get error message "failed to load".


    Scenario: Payment successful
        Given I am on the homepage.
        When I click on buy now.
        And I click on checkout.
        And I click on virtual account option.
        And I click on bank mandiri.
        Then I get company code and Mandiri VA number.