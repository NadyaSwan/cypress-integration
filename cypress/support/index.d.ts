declare namespace Cypress {
  interface Chainable {
    /** Command to clear input and type into the given value
     * @text value you want to type
     */
    fillWith(text: string): Cypress.Chainable<JQuery>;

    /** Command to drag element to given area
     * @targetEl area to drop into
     */
    dragTo(targetEl: string): void;
  }
}
