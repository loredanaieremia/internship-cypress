describe('Task 3', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it.only('Check the Purchase functionality', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').should('be.visible').click()
        cy.get('.skip-account').should('be.visible').click()
        cy.get('#header-account > .links > ul > :nth-child(2) > a').should('be.visible')
        cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
        cy.get('.nav-1 > .level0').should('be.visible').click()
        cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').should('be.visible').click()
        cy.get('span > a').should('be.visible').click()
        cy.get('.nav-1 > .level0').should('be.visible').click()
        cy.get('#product-collection-image-1').should('be.visible').click()
        cy.get('.link-wishlist').should('be.visible').click()
        cy.get('.nav-2 > .level0').should('be.visible').click()
        cy.get('#product-collection-image-4').should('be.visible').click()
        cy.get('.link-wishlist').should('be.visible').click()
        cy.get('.nav-2 > .level0').should('be.visible').click()
        cy.get('#product-collection-image-5').should('be.visible').click()
        cy.get('.link-wishlist').should('be.visible').click()
        cy.get('#item_51783 > .wishlist-cell5 > .btn-remove').should('be.visible').click()






        







       
      
    })
})    
