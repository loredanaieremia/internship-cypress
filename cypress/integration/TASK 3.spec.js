describe('Check the Update account functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check the Update account information by adding new data', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').click()
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .first > a').click()
        cy.get(':nth-child(3) > .col2-set > .col-1 > .box > .box-title > a').click()
        cy.get('#firstname').clear().type('Mikael')
        cy.get('#middlename').clear().type('Sam')
        cy.get('#current_password').clear().type('12345678')
        cy.get('.buttons-set > .button').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','The account information has been saved.')

    })
    it('Check the Add new address functionality by adding a new default address', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').should('be.visible').click()
        cy.get('.block-content > ul > :nth-child(3) > a').should('be.visible').click()
        cy.get('.page-title > .button').should('be.visible').click()
        cy.get('#telephone').type('0976543234')
        cy.get('#street_1').clear().type('5th avenue')
        cy.get('#city').type('New York')
        cy.get('#region_id').select('New York')
        cy.get('#zip').type('90012')
        cy.get('#country').select('United States')
        cy.get(':nth-child(5) > label').should('be.visible').click()
        cy.get(':nth-child(6) > label').should('be.visible').click()
        cy.get('.buttons-set > .button').should('be.visible').click()
    })
    
    it('Check the Wishlist functionality by adding 2 items to wishlist, 1 for each category', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').should('be.visible')
        cy.get('#send2').click()
        cy.get('.nav-1 > .level0').should('be.visible')
        cy.get('.nav-1 > .level0').click()
        cy.get(':nth-child(2) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
        cy.get('.nav-2 > .level0').should('be.visible')
        cy.get('.nav-2 > .level0').click()
        cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
        cy.get('.header-minicart > .skip-link').should('be.visible')
        cy.get('.header-minicart > .skip-link').click()
        cy.get('.skip-account').should('be.visible')
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > :nth-child(2) > a').should('be.visible')
        cy.get('#header-account > .links > ul > :nth-child(2) > a').click()

    })
    it.only('verify wishlist items', () => {



    it('Check the update functionality by upfating the quantity for 1 item', () => {
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').should('be.visible').click()
        cy.get('.skip-account').should('be.visible').click()
        cy.get('#item_51786 > .wishlist-cell2 > .cart-cell > .add-to-cart-alt > .input-text').clear().type('2')
        cy.get('.buttons-set > .btn-update').should('be.visible').click()
      


    
  })
    

})    


