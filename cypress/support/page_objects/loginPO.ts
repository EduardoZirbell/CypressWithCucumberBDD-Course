import BasePO from "./basePO";

class LoginPO extends BasePO {
    elements = {
        usernameField: () => cy.get('.form input#text'),
        passwordField: () => cy.get('.form input#password'),
        loginButton: () => cy.get('.form button#login-button')
    };

    navigateTo_Login_Page() {
        super.navigate('Login-Portal/index.html');
    };

    type_Username(username: string) {
        if (username != '') {
            this.elements.usernameField()
                .click()
                .type(username);
        };
    };

    type_Password(password: string) {
        if (password != '') {
            this.elements.passwordField()
                .click()
                .type(password);
        };
    };

    clickOn_Login_Button() {
        this.elements.loginButton()
            .click();
    };
};

export default LoginPO;