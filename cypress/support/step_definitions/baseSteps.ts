import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
    cy.log('This will run before each scenario');
    cy.clearAllLocalStorage();
});

Before({ tags: '@login' }, () => {
    cy.log('This will run before each scenario with tag login');
});

After(() => {
    cy.log('This will run after each scenario');
});

When('I wait for {int} seconds', (seconds: number) => {
    cy.wait(seconds * 1000);
});