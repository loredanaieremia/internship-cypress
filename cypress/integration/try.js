describe('Task 3', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('verify the selected address is the default one', () => {
      cy.get('.skip-account').click()
      cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
      cy.get('#email').type('mike.smith@gmail.com')
      cy.get('#pass').type('12345678')
      cy.get('#send2').should('be.visible').click()
      cy.get('.block-content > ul > :nth-child(3) > a').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.col2-set.addresses-list > div.col-1.addresses-primary > h2').should('have.text','Default Addresses')
      
  })



})