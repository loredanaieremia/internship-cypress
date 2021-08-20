describe('Check Homepage', () => {
  beforeEach(() => {

    cy.visit('https://parabank.parasoft.com/parabank/about.htm')

  })

  it.only('Check how the app responds to multiple invalid logins ', () => {
    cy.get(':nth-child(2) > .input').type('mikesmith')
    cy.get(':nth-child(4) > .input').type('12345678')
    cy.get(':nth-child(5) > .button').should('be.visible').click()
    cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').click()
    cy.get('#customer\\.address\\.street').type('591 Grand Avenue')
    
    cy.get('#customer\.address\.city').clear()
    cy.get('#customer\.address\.city').type('San Marcos')
    cy.get('#customer\.address\.zipCode').clear()
    cy.get('#customer\.address\.zipCode').type('92069')
    cy.get('[colspan="2"] > .button').should('be.visible').click()

    
  })
})