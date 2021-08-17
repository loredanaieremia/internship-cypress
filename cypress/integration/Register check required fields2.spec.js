describe('Register customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check all the optional fields when do not fill data', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Jake')
      cy.get('#middlename').click()
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('jake.smith@gmail.com')
      cy.get('#password').type('abcdefgh')
      cy.get('#confirmation').type('abcdefgh')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.contains('li > span')  
    
    })
  
  })
