describe('Task 3', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    }) 
    it('Remove 1 item', () => {
      cy.get('.skip-account').click()
      cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
      cy.get('#email').type('mike.smith@gmail.com')
      cy.get('#pass').type('12345678')
      cy.get('#send2').should('be.visible').click()
      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > :nth-child(2) > a').should('be.visible').click()
      cy.get('#item_51787 > .wishlist-cell5 > .btn-remove').should('be.visible').click()
      
    })
    

  
})    
