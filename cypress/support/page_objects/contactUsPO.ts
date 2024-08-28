import BasePO from "./basePO";

class ContactUsPO extends BasePO {
    elements = {
        firstNameField: () => cy.get('#contact_form input[name="first_name"]'),
        lastNameField: () => cy.get('#contact_form input[name="last_name"]'),
        emailAddressField: () => cy.get('#contact_form input[name="email"]'),
        commentField: () => cy.get('#contact_form textarea[name="message"]'),
        submitButton: () => cy.get('#contact_form #form_buttons [type="submit"]'),
        resetButton: () => cy.get('#contact_form #form_buttons [type="reset"]'),
        successMessage: () => cy.get('#contact_reply h1'),
        errorMessage: () => cy.get('body'),
        successOrErrorMessage: () => cy.xpath('//h1 | //body')
    };

    navigateTo_ContactUs_Page() {
        super.navigate('Contact-Us/contactus.html');
    };

    type_FirstName(firstName: string) {
        if (firstName != '') {
            this.elements.firstNameField()
                .click()
                .type(firstName);
        };
    };

    type_LastName(lastName: string) {
        if (lastName != '') {
            this.elements.lastNameField()
                .click()
                .type(lastName);
        };
    };

    type_EmailAddress(email: string) {
        if (email != '') {
            this.elements.emailAddressField()
                .click()
                .type(email);
        };
    };

    type_Comment(comment: string) {
        if (comment != '') {
            this.elements.commentField()
                .click()
                .type(comment);
        };
    };

    clickOn_Submit_Button() {
        this.elements.submitButton()
            .click();
    };

    clickOn_Reset_Button() {
        this.elements.resetButton()
            .click();
    };

    verify_Success_Message() {
        this.elements.successMessage()
            .should('have.text', 'Thank You for your Message!');
    };

    verify_Error_Message() {
        this.elements.errorMessage()
            .should('contain.text', 'Error: all fields are required');
    };

    verify_Invalid_Email_Message() {
        this.elements.errorMessage()
            .should('contain.text', 'Error: Invalid email address');
    };

    verify_Sucess_Or_Error_Message(message: string) {
        //Course's way to do
        this.elements.successOrErrorMessage()
            .contains(message);
        // My way to do
        // if (message.includes('Thank You for your Message!')) {
        //     cy.get('#contact_reply h1')
        //         .should('have.text', message)
        // } else {
        //     cy.get('body')
        //         .should('contain.text', 'Error: Invalid email address')
        // }
    };
};

export default ContactUsPO;