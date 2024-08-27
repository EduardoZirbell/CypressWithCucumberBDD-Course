import BasePO from "./basePO";

class HomePagePO extends BasePO {

    navigateToHomePage() {
        super.navigate("");
    };

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab('#contact-us');
    };

    clickOn_LoginPortal_Button() {
        cy.clickAndOpenLink_InSameTab('#login-portal');
    };
};

export default HomePagePO;