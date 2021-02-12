export default class {
  banner(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return cy.get('#at-cv-lightbox');
  }

  treeMenu(): Cypress.Chainable<JQuery<HTMLUListElement>> {
    return cy.get('#treemenu');
  }

  treeBranches(): Cypress.Chainable<JQuery<HTMLLIElement>> {
    return this.treeMenu().find('ul>li.tree-branch');
  }

  inputFormExamples(): Cypress.Chainable<JQuery> {
    return this.treeBranches().eq(0).find('ul>li>a');
  }
}
