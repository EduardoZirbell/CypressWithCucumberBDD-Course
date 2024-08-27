import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BasePO from '../page_objects/basePO';
import HomePagePO from '../page_objects/homePagePO';
const basePO = new BasePO();
const homePagePO = new HomePagePO();

Given('I navigate to the WebDriverUniversity HomePage', () => {
  //My way of doing it
  // cy.visit(Cypress.env('url'));
  //The way the course does it
  // basePO.navigate('/');
  homePagePO.navigateToHomePage();
});

When('I click on the contact us button', () => {
  cy.clickAndOpenLink_InSameTab('#contact-us');
});

When('I click on the login portal button', () => {
  cy.clickAndOpenLink_InSameTab('#login-portal');
});


