describe('Login customer', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check login functionality', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').click()
  
    
    })
  
  })