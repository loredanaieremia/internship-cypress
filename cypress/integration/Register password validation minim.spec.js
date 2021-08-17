describe('Register customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check the password limit when enter value less than min', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Hank')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('hank.smith@gmail.com')
      cy.get('#password').type('1234a')
      cy.get('#confirmation').type('1234a')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.contains('#advice-validate-password-password')
  
    
    })
  
  })