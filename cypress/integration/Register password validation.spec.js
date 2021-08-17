describe('Register customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check the phone number when passing alphanumeric data', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Thomas')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('thomas.smith@gmail.com')
      cy.get('#password').type('abcd1234@')
      cy.get('#confirmation').type('abcd1234@')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.contains('li > span')
  
    
    })
  
  })