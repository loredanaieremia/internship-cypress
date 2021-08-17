describe('Register customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check register functionality', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Mike')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('mike.smith@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#confirmation').type('12345678')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
  
    
    })
  
  })