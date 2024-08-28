@login @regression
Feature: Login Portal Page

    Background: Pre Conditions
        Given I navigate to the WebDriverUniversity HomePage
        When I test origin

    Scenario Outline: Validate Login in the Portal : <title>
        And I type the username '<username>'
        And I type the password '<password>'
        And I click on the login button
        Then I should be presented with an alert with the message '<message>'

        Examples:
            | title                                             | username   | password     | message              |
            | Successful Login with webdriver user              | webdriver  | webdriver123 | validation succeeded |
            | Unsuccessful Login with invalid user              | webdriver1 | webdriver123 | validation failed    |
            | Unsuccessful Login with invalid password          | webdriver  | webdriver1   | validation failed    |
            | Unsuccessful Login with invalid user and password | webdriver1 | webdriver1   | validation failed    |
            | Unsuccessful Login without user and password      |            |              | validation failed    |