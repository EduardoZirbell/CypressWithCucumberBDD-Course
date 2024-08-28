import { When } from "@badeball/cypress-cucumber-preprocessor";

When('I test origin', () => {
    cy.origin('https://www.google.com', () => {
        const basePO = Cypress.require('../page_objects/basePO.ts')
        basePO.getPageTitle()
    })
})

