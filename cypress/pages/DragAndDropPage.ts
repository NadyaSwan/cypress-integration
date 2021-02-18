export default class {
  itemsToDrag(): Cypress.Chainable<JQuery<HTMLSpanElement>> {
    return cy.get('#todrag>span');
  }

  dropZone(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return cy.get('#mydropzone');
  }

  droppedList(): Cypress.Chainable<JQuery<HTMLSpanElement>> {
    return cy.get('#droppedlist>span');
  }
}
