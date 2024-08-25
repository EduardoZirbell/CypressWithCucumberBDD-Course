import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I type a first name', () => {
    cy.get('#contact_form [name="first_name"]')
        .type('Eduardo')
})

When('I type a last name', () => {
    cy.get('#contact_form [name="last_name"]')
        .type('Teste')
})

When('I enter an email address', () => {
    cy.get('#contact_form [name="email"]')
        .type('eduardoteste@gmail.com')
})

When('I enter an invalid email address', () => {
    cy.get('#contact_form [name="email"]')
        .type('eduardoteste')
})

When('I type a comment', () => {
    cy.get('#contact_form [name="message"]')
        .type('Mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage and message.')
})

When('I click on the submit button', () => {
    cy.get('#contact_form #form_buttons [type="submit"]')
        .click()
})

When('I click on the reset button', () => {
    cy.get('#contact_form #form_buttons [type="reset"]')
        .click()
})

When('I type a specific first name {string}', (firstName: string) => {
    cy.get('#contact_form [name="first_name"]')
        .type(firstName)
})

When('I type a specific last name {string}', (lastName: string) => {
    cy.get('#contact_form [name="last_name"]')
        .type(lastName)
})

When('I enter a specific email address {string}', (emailAddress: string) => {
    cy.get('#contact_form [name="email"]')
        .type(emailAddress)
})

When('I type a specific word {string} and number {int} within the comment input', (word: string, number: number) => {
    cy.get('#contact_form [name="message"]')
        .type(word + ' ' + number)
})

When('I type a first name {word} and a last name {string}', (firstName: string, lastName: string) => {
    cy.get('#contact_form [name="first_name"]')
        .type(firstName)
    cy.get('#contact_form [name="last_name"]')
        .type(lastName)
})

When('I type an emailAddress {string} and a comment {string}', (emailAddress: string, comment: string) => {
    cy.get('#contact_form [name="email"]')
        .type(emailAddress)
    cy.get('#contact_form [name="message"]')
        .type(comment)
})

Then('the fields should be cleaned', () => {
    cy.get('#contact_form [name="first_name"]')
        .should('be.empty')
    cy.get('#contact_form [name="last_name"]')
        .should('be.empty')
    cy.get('#contact_form [name="email"]')
        .should('be.empty')
    cy.get('#contact_form [name="message"]')
        .should('be.empty')
})

Then('I should be presented with a successful submission message', () => {
    cy.get('#contact_reply h1')
        .should('have.text', 'Thank You for your Message!')
})

Then('I should be presented with an error submission message', () => {
    cy.get('body')
        .should('contain.text', 'Error: all fields are required')
})

Then('an error invalid email message', () => {
    cy.get('body')
        .should('contain.text', 'Error: Invalid email address')
})

Then('I should be presented with a header text {string}', (message: string) => {
    //Course's way to do
    cy.xpath('//h1 | //body').contains(message);
    // My way to do
    // if (message.includes('Thank You for your Message!')) {
    //     cy.get('#contact_reply h1')
    //         .should('have.text', message)
    // } else {
    //     cy.get('body')
    //         .should('contain.text', 'Error: Invalid email address')
    // }
})
