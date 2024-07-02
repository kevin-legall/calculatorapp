export {}
describe('navbar feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should get a base url', () => {
    cy.url().should('include', '/calculatrice')
  })

  it('should navigate', () => {
    cy.get('[data-test-id="navigation-calculatrice"]').click()
    cy.url().should('include', '/calculatrice')

    cy.get('[data-test-id="navigation-historique"]').click()
    cy.url().should('include', '/historique')

    cy.get('[data-test-id="navigation-convertisseur"]').click()
    cy.url().should('include', '/convertisseur')
  })

  it('should have the correct style for colored line when clicked', () => {
    cy.get('[data-test-id="navigation-calculatrice"]').click()
    cy.get('[data-test-id="colored-line"]').should('have.attr', 'style', 'left: 0%;')

    cy.get('[data-test-id="navigation-historique"]').click()
    cy.get('[data-test-id="colored-line"]').should('have.attr', 'style', 'left: 33%;')

    cy.get('[data-test-id="navigation-convertisseur"]').click()
    cy.get('[data-test-id="colored-line"]').should('have.attr', 'style', 'left: 67%;')
  })

  it('should have the correct style for colored line when navigate', () => {
    cy.visit('http://localhost:3000/calculatrice')
    cy.get('[data-test-id="colored-line"]').should('have.attr', 'style', 'left: 0%;')

    cy.visit('http://localhost:3000/historique')
    cy.get('[data-test-id="colored-line"]').should('have.attr', 'style', 'left: 33%;')

    cy.visit('http://localhost:3000/convertisseur')
    cy.get('[data-test-id="colored-line"]').should('have.attr', 'style', 'left: 67%;')
  })
})