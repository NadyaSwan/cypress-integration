export default class {
  singleInputField(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return cy.get('.text-left .panel-default').eq(0);
  }

  twoInputFields(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return cy.get('.text-left .panel-default').eq(1);
  }
}
