Feature: Sending mail to admin
  I want to send mail to admin

  Background: Mail to admin
    Given I open browser chrome
    And I land on multicart landing page
    And I complete login with James valid credentails
    Given I navigate to  account page
    When I select seller dashbosrd

    Scenario: User Sees individual account option
    When I navigate to send mail page
    Then I send mail to admin