import BasePO from "./basePO";

class LoginPO extends BasePO {
    elements = {
        usernameField: () => cy.get('.form input#text'),
        passwordField: () => cy.get('.form input#password'),
        loginButton: () => cy.get('.form button#login-button')
    };

    navigateTo_Login_Page() {
        super.navigate('Login-Portal/index.html');
    }

    type_Username(username: string) {
        if (username && username.trim() !== '') {
            this.elements.usernameField()
                .click()
                .type(username);
        } else {
            cy.log('Username is undefined or empty');
        }
    }

    type_Password(password: string) {
        if (password && password.trim() !== '') {
            this.elements.passwordField()
                .click()
                .type(password);
        } else {
            cy.log('Password is undefined or empty');
        }
    }

    clickOn_Login_Button() {
        this.elements.loginButton()
            .should('exist')
            .click();
    }
}

export default LoginPO;
