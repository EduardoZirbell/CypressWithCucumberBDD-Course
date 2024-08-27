import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ContactUsPO from '../page_objects/contactUsPO';

const contactUsPagePO = new ContactUsPO();

When('I type a first name', () => {
    contactUsPagePO.type_FirstName('Eduardo');
});

When('I type a last name', () => {
    contactUsPagePO.type_LastName('Teste');
});

When('I enter an email address', () => {
    contactUsPagePO.type_EmailAddress('eduardoteste@gmail.com');
});

When('I enter an invalid email address', () => {
    contactUsPagePO.type_EmailAddress('eduardoteste');
});

When('I type a comment', () => {
    contactUsPagePO.type_Comment('Mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage, mensage and message.');
});

When('I click on the submit button', () => {
    contactUsPagePO.clickOn_Submit_Button();
});


When('I click on the reset button', () => {
    contactUsPagePO.clickOn_Reset_Button();
});

When('I type a specific first name {string}', (firstName: string) => {
    contactUsPagePO.type_FirstName(firstName);
});

When('I type a specific last name {string}', (lastName: string) => {
    contactUsPagePO.type_LastName(lastName);
});

When('I enter a specific email address {string}', (emailAddress: string) => {
    contactUsPagePO.type_EmailAddress(emailAddress);
});

When('I type a specific word {string} and number {int} within the comment input', (word: string, number: number) => {
    contactUsPagePO.type_Comment(`${word} ${number}`);
});

When('I type a first name {word} and a last name {string}', (firstName: string, lastName: string) => {
    contactUsPagePO.type_FirstName(firstName);
    contactUsPagePO.type_LastName(lastName);
});

When('I type an emailAddress {string} and a comment {string}', (emailAddress: string, comment: string) => {
    contactUsPagePO.type_EmailAddress(emailAddress);
    contactUsPagePO.type_Comment(comment);
});

Then('the fields should be cleaned', () => {
    contactUsPagePO.elements.firstNameField()
        .should('be.empty');
    contactUsPagePO.elements.lastNameField()
        .should('be.empty');
    contactUsPagePO.elements.emailAddressField()
        .should('be.empty');
    contactUsPagePO.elements.commentField()
        .should('be.empty');
});

Then('I should be presented with a successful submission message', () => {
    contactUsPagePO.verify_Success_Message();
});

Then('I should be presented with an error submission message', () => {
    contactUsPagePO.verify_Error_Message();
});

Then('an error invalid email message', () => {
    contactUsPagePO.verify_Invalid_Email_Message();
});

Then('I should be presented with a header text {string}', (message: string) => {
    contactUsPagePO.verify_Sucess_Or_Error_Message(message);
});
