Feature: ContactUs Page
    Background: Pre Conditions
        Given I navigate to the WebDriverUniversity HomePage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Teste"
        And I type a specific last name "Eduardo"
        And I enter a specific email address "eduardoTeste@gmail.com"
        And I type a specific word "Teste" and number 666 within the comment input
        And I click on the submit button
        Then I should be presented with a successful submission message

    Scenario: Reset Button Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the reset button
        Then the fields should be cleaned

    Scenario: Invalid Contact Us Form Submission without First Name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with an error submission message

    Scenario: Invalid Contact Us Form Submission without Last Name
        And I type a first name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with an error submission message

    Scenario: Invalid Contact Us Form Submission with an Invalid Email
        And I type a first name
        And I type a last name
        And I enter an invalid email address
        And I type a comment
        And I click on the submit button
        Then an error invalid email message

    Scenario: Invalid Contact Us Form Submission without Email
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an error submission message
        And an error invalid email message

    Scenario: Invalid Contact Us Form Submission without a Comment
        And I type a first name
        And I type a last name
        And I enter an email address
        And I click on the submit button
        Then I should be presented with an error submission message

    Scenario: Invalid Contact Us Form Submission without all Fields
        And I click on the submit button
        Then I should be presented with an error submission message
        And an error invalid email message

    Scenario Outline: Validate Contact Us Page <title>
        And I type a first name <firstName> and a last name '<lastName>'
        And I type an emailAddress '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with a header text '<message>'

        Examples:
            | title                        | firstName | lastName | emailAddress           | comment                 | message                      |
            | Successful Form Submission   | John      | Jones    | john_jones@mail.com    | Hello, how are you?     | Thank You for your Message!  |
            | Successful Form Submission   | Mia       | Carter   | Mia_carter123@mail.com | Teste123 Teste321       | Thank You for your Message!  |
            | Unsuccessful Form Submission | Grace     | Hudson   | grace_hudson           | Do you create websites? | Error: Invalid email address |