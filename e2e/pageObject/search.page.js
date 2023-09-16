const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH_BTN = '#searchTerm';

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static search(banking) {
        cy.get(SEARCH_BTN).type(banking, { enter: true });
    }
}

export default SearchPage;
