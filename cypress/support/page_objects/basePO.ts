class BasePO {

    navigate(path) {
        cy.fixture('config.json').then((config) => {
            cy.visit(config.baseUrl + path);
        });
    };
    getPageTitle() {
        return cy.title();
    };
};

export default BasePO;