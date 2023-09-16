Feature: Make a payment with VA BNI

    As a valid user with poor or unavailable connection
    i want to make a payment with BNI VA
    
    As a valid user
    i want to make a payment with BNI VA

    Scenario: Payment unsuccessful
        Given I am on the homepage,
        When I click on buy now,
        And I click on checkout,
        And I click on virtual account option,
        And I click on bank BNI,
        Then I dont get BNI VA number and I get error message "failed to load",


    Scenario: Payment successful
        Given I am on the homepage,
        When I click on buy now,
        And I click on checkout,
        And I click on virtual account option,
        And I click on bank BNI,
        Then I get BNI VA number,