Feature: Search
  As a user
  I want to search on the website

  Scenario: Searching for a valid term
    Given Im on the homepage
    When I enter "banking" in the search field and I click on search button
    Then I should displayed search results related to "banking"

