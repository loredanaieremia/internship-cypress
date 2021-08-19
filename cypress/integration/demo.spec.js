describe('Task 3', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    }) 
    it('Check the Add new address functionality by adding a new default address', () => {
      cy.get('.skip-account').click()
      cy.get('#header-account > .links > ul > .last > a').click()
      cy.get('#email').type('mike.smith@gmail.com')
      cy.get('#pass').type('12345678')
      cy.get('#send2').should('be.visible').click()
      cy.get('.block-content > ul > :nth-child(3) > a').should('be.visible').click()
      cy.get('.page-title > .button').should('be.visible').click()
      cy.get('#telephone').type('0976543234')
      cy.get('#street_1').clear().type('5th avenue')
      cy.get("#region_id").select("Maryland").should("have.value", "31")
      cy.get('#city').type('New York')
      cy.get('#zip').type('90012')
      cy.get('#country').select('United States')
      cy.get(':nth-child(5) > label').should('be.visible').click()
      cy.get(':nth-child(6) > label').should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
  })
  
})    
