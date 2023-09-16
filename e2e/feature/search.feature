Feature: Search
  As a user
  I want to search on the website

  Scenario: Searching for a valid term
    Given I am on the homepage
    When I enter "banking" in the search field and I click on the search button
    Then I should see search results related to "banking"

