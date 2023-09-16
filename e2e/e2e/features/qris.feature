Feature: Make a payment with QRIS

    As a valid user with poor or unavailable connection
    i want to make a payment with QRIS
    
    As a valid user
    i want to make a payment with QRIS

    Scenario: Payment unsuccessful
        Given I am on the homepage;
        When I click on buy now;
        And I click on checkout;
        And I click on QRIS option;
        Then I dont get QR code and I get error message "failed to load QR";


    Scenario: Payment successful
        Given I am on the homepage;
        When I click on buy now;
        And I click on checkout;
        And I click on QRIS option;
        Then I get QR code;