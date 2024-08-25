Feature: Login Portal Page

    Background: Pre Conditions
        Given I navigate to the WebDriverUniversity HomePage
        When I click on the login portal button

    Scenario Outline: Validate Login in the Portal : <title>
        And I type the username '<username>'
        And I type the password '<password>'
        And I click on the login button
        Then I should be presented with an alert with the message '<message>'

        Examples:
            | title                                             | username  | password     | message              |
            | Successful Login with webdriver user              | webdriver | webdriver123 | validation succeeded |
            | Unsuccessful Login with invalid user              | webdriver | webdriver123 | validation failed    |
            | Unsuccessful Login with invalid password          | webdriver | webdriver123 | validation failed    |
            | Unsuccessful Login with invalid user and password | webdriver | webdriver123 | validation failed    |
            | Unsuccessful Login without user and password      | webdriver | webdriver123 | validation failed    |