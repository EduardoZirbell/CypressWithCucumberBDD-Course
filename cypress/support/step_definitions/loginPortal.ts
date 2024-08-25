import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When('I type the username {string}', (username: string) => {
    cy.get('.form input#text')
        .click()
        .type(username)
})

When('I type the password {string}', (password: string) => {
    cy.get('.form input#password')
        .click()
        .type(password)
})

When('I click on the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub)
    cy.get('.form button#login-button')
        .click()
})

Then('I should be presented with an alert with the message {string}', (message) => {
    cy.log(stub)
    // expect(stub).to.have.been.calledWith(message)
})
