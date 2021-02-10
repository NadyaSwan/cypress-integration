import pages from '../pages';

describe('Input form checks', () => {
  context('general', () => {
    it('should see input form fields', () => {
      cy.visit('/');
      pages.basePage
        .banner()
        .should('be.visible')
        .within(() => {
          cy.contains('No, thanks!').should('be.visible').click();
        });
      pages.basePage.treeMenu().should('be.visible');
      pages.basePage
        .treeBranches()
        .should('be.visible')
        .and('have.length', 7)
        .eq(0)
        .click();
      pages.basePage
        .inputFormExamples()
        .should('be.visible')
        .and('have.length', 7)
        .eq(0)
        .click();
      pages.inputFormsPage.singleInputField().should('be.visible');
      pages.inputFormsPage.twoInputFields().should('be.visible');
    });
  });
  context('valid', () => {
    it('should fill input with not allowed chars', () => {});
  });
});
