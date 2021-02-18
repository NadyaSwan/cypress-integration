import pages from '../pages';

describe('Drag and drop items', () => {
  before(() => {
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
      .eq(6)
      .click();
    pages.basePage
      .otherExamples()
      .should('be.visible')
      .and('have.length', 3)
      .eq(0)
      .click();
    pages.dragAndDropPage
      .itemsToDrag()
      .should('be.visible')
      .and('have.length', 4);
    pages.dragAndDropPage.dropZone().should('be.visible');
    pages.dragAndDropPage.droppedList().should('not.exist');
  });

  it('should be dragged and dropped in zone, displayed in the list', () => {
    cy.contains('Draggable 1').dragTo('#mydropzone');
    pages.dragAndDropPage
      .droppedList()
      .should('have.length', 1)
      .eq(0)
      .should('have.text', 'Draggable 1');

    cy.contains('Draggable 2').dragTo('#mydropzone');
    pages.dragAndDropPage
      .droppedList()
      .should('have.length', 2)
      .eq(1)
      .should('have.text', 'Draggable 2');

    cy.contains('Draggable 3').dragTo('#mydropzone');
    pages.dragAndDropPage
      .droppedList()
      .should('have.length', 3)
      .eq(2)
      .should('have.text', 'Draggable 3');

    cy.contains('Draggable 4').dragTo('#mydropzone');
    pages.dragAndDropPage
      .droppedList()
      .should('have.length', 4)
      .eq(3)
      .should('have.text', 'Draggable 4');
  });
});
