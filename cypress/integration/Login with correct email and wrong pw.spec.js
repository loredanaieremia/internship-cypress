describe('Login customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check login functionality when entering wrong email and correct pw', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('1234567')
        cy.get('#send2').click()
        cy.contains('li > span')
  
    
    })
  
  })