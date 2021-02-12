Cypress.Commands.add(
  'fillWith',
  { prevSubject: 'element' },
  (element: Cypress.Chainable<JQuery>, text: string) => {
    return cy.wrap(element).clear().type(text).blur();
  }
);
