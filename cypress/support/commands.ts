Cypress.Commands.add(
  'fillWith',
  { prevSubject: 'element' },
  (element: Cypress.Chainable<JQuery>, text: string) => {
    return cy.wrap(element).clear().type(text).blur();
  }
);

Cypress.Commands.add(
  'dragTo',
  { prevSubject: 'element' },
  (subject: Cypress.Chainable<JQuery>, targetEl: string) => {
    const dataTransfer = new DataTransfer();

    cy.wrap(subject).trigger('dragstart', { dataTransfer });
    cy.get(targetEl).trigger('drop', { dataTransfer });
    cy.wrap(subject).trigger('dragend');
  }
);
