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
    }

    type_FirstName(firstName: string) {
        if (firstName && firstName.trim() !== '') {
            this.elements.firstNameField()
                .click()
                .type(firstName);
        } else {
            cy.log('First name is undefined or empty');
        }
    }

    type_LastName(lastName: string) {
        if (lastName && lastName.trim() !== '') {
            this.elements.lastNameField()
                .click()
                .type(lastName);
        } else {
            cy.log('Last name is undefined or empty');
        }
    }

    type_EmailAddress(email: string) {
        if (email && email.trim() !== '') {
            this.elements.emailAddressField()
                .click()
                .type(email);
        } else {
            cy.log('Email is undefined or empty');
        }
    }

    type_Comment(comment: string) {
        if (comment && comment.trim() !== '') {
            this.elements.commentField()
                .click()
                .type(comment);
        } else {
            cy.log('Comment is undefined or empty');
        }
    }

    clickOn_Submit_Button() {
        this.elements.submitButton()
            .should('exist')
            .click();
    }

    clickOn_Reset_Button() {
        this.elements.resetButton()
            .should('exist')
            .click();
    }

    verify_Success_Message() {
        this.elements.successMessage()
            .should('have.text', 'Thank You for your Message!');
    }

    verify_Error_Message() {
        this.elements.errorMessage()
            .should('contain.text', 'Error: all fields are required');
    }

    verify_Invalid_Email_Message() {
        this.elements.errorMessage()
            .should('contain.text', 'Error: Invalid email address');
    }

    verify_Sucess_Or_Error_Message(message: string) {
        if (message && message.trim() !== '') {
            this.elements.successOrErrorMessage()
                .contains(message);
        } else {
            throw new Error('Message is undefined or empty');
        }
    }
}

export default ContactUsPO;
