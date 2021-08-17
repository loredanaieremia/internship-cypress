describe('Register customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check the required fields by not filling any data', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').click()
      cy.get('#middlename').click()
      cy.get('#lastname').click()
      cy.get('#email_address').click()
      cy.get('#password').click()
      cy.get('#confirmation').click()
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.contains('#advice-required-entry-firstname')
  
    
    })
  
  })
