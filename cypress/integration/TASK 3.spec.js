describe('Task 3', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('cypress test for updating account information', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').click()
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .first > a').click()
        cy.get(':nth-child(3) > .col2-set > .col-1 > .box > .box-title > a').click()
        cy.get('#firstname').type('Mikael')
        cy.get('#middlename').type('Sam')
        cy.get('#current_password').type('12345678')
        cy.get('.buttons-set > .button').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','The account information has been saved.')

    })
    it.only('Check the Add new address functionality', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').click()
        cy.get('.current').click()
        cy.get('#street_1').select('5th avenue,California')
        cy.get('#city').type('California')
        cy.get('#region').type('California')
        cy.get('#zip').type('90012')
        cy.get('#country').select('United States')
        cy.get('.buttons-set > .button').click()
    })
})    


