import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPortalPO from "../page_objects/loginPO";

let stub;
const loginPortalPO = new LoginPortalPO();

Given('I navigate to the WebDriverUniversity Login Portal Page', () => {
    loginPortalPO.navigateTo_Login_Page();
});

When('I type the username {string}', (username: string) => {
    loginPortalPO.type_Username(username);
});

When('I type the password {string}', (password: string) => {
    loginPortalPO.type_Password(password);
});

When('I click on the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    loginPortalPO.clickOn_Login_Button();
});

Then('I should be presented with an alert with the message {string}', (message) => {
    expect(stub).to.have.been.calledWith(message);
});
