export default class {
  singleInputField(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return cy.get('.text-left .panel-default').eq(0);
  }

  twoInputFields(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return cy.get('.text-left .panel-default').eq(1);
  }

  userMessage(): Cypress.Chainable<JQuery<HTMLSpanElement>> {
    return cy.get('#display');
  }

  userMessageInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
    return cy.get('input#user-message');
  }

  firstValueInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
    return cy.get('#sum1');
  }

  secondValueInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
    return cy.get('#sum2');
  }

  valueMessage(): Cypress.Chainable<JQuery<HTMLSpanElement>> {
    return cy.get('#displayvalue');
  }
}
