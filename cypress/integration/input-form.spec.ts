import pages from '../pages';

const message = 'Test message to type!';

describe('Input form checks', () => {
  beforeEach(() => {
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

  context('Single input field', () => {
    it('should fill input with words and show them in message on submit', () => {
      pages.inputFormsPage.userMessageInput().fillWith(message);
      cy.contains('button', 'Show Message').click();
      pages.inputFormsPage.userMessage().should('have.text', message);
    });
  });

  context('Two input fields', () => {
    it('should type integer numbers into two fields and see their SUM on submit', () => {
      cy.log('Check SUM of two strings');
      pages.inputFormsPage.firstValueInput().fillWith('string 1');
      pages.inputFormsPage.secondValueInput().fillWith('string 2');
      cy.contains('button', 'Get Total').click();
      pages.inputFormsPage.valueMessage().should('have.text', 'NaN');

      cy.log('Check SUM of two numbers');
      pages.inputFormsPage.firstValueInput().fillWith('1');
      pages.inputFormsPage.secondValueInput().fillWith('2');
      cy.contains('button', 'Get Total').click();
      pages.inputFormsPage.valueMessage().should('have.text', '3');
    });
  });
});
