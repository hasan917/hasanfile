Feature: validate return requests

  Background: Landing on MCT home page
    Given I open browser chrome
    And I land on multicart landing page
    And I complete login with James valid credentails
    Given I navigate to  account page
    

    Scenario: User See if return requests are present
      Then I navigate to request return page
      And I validate the return requests