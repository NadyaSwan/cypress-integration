declare namespace Cypress {
  interface Chainable {
    /** Command to clear input and type into the given value
     * @text value you want to type
     */
    fillWith(text: string): Cypress.Chainable<JQuery>;
  }
}
