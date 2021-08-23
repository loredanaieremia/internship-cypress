describe('Check purchase functionality as an unregistered user', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Verify search an item functionaliy', () => {
        cy.get('#search').type('iphone')
        cy.get('.input-box > .button').should('be.visible').click()
        cy.get('.product-info > .actions > .button').should('be.visible').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','IPhone was added to your shopping cart.')
    })
  
    it('Verify Add an item to cart functionality', () => {
        cy.get('.nav-2 > .level0').should('be.visible').click()
        cy.get('#product-collection-image-5').should('be.visible').click()
        cy.get('.add-to-cart-buttons > .button').should('be.visible').click()
        cy.get('li > span').should('have.text','Samsung LCD was added to your shopping cart.')
        cy.get('.a-center > .btn-remove').should('be.visible').click()
    })

    it.only('Verify Finalize a purchase functionality', () => {
        cy.get('.nav-2 > .level0').should('be.visible').click()
        cy.get('#product-collection-image-5').should('be.visible').click()
        cy.get('.add-to-cart-buttons > .button').should('be.visible').click()
        cy.get('li > span').should('have.text','Samsung LCD was added to your shopping cart.')
        cy.get('.method-checkout-cart-methods-onepage-bottom > .button').should('be.visible').click()  
        cy.get('#onepage-guest-register-button').should('be.visible').click() 
        cy.get('#billing\\:firstname').type('Mike')
        cy.get('#billing\\:middlename').type('Samuel')
        cy.get('#billing\\:lastname').type('Smith')
        cy.get('#billing\\:email').type('mike.smith@gmail.com')
        cy.get('#billing\\:street1').type('5th avenue,California')
        cy.get('#billing\\:city').type('California')
        cy.get('#billing\\:postcode').type('24430')
        cy.get('#billing\\:country_id').select('Serbia')
        cy.get('#billing\\:telephone').type('0654345678')
        cy.get('#co-billing-form > :nth-child(1) > .form-list > :nth-child(2) > label').should('be.visible').click()
        cy.get('#billing-buttons-container > .button').should('be.visible').click()
        cy.get('#shipping-method-buttons-container > .button').should('be.visible').click()
        cy.get('#dt_method_checkmo > label').should('be.visible').click()
        cy.get('#payment-buttons-container > .button').should('be.visible').click()
        cy.get('#review-buttons-container > .button').should('be.visible').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1').should('have.text','Your order has been received.')
        cy.get('body > div > div > div.main-container.col1-layout > div > div > p:nth-child(3)').should('exist')
        
        cy.get('<p>Your order # is: 100014930.</p>')
          .invoke('val')
          .then(sometext => cy.log(sometext))



      }) 


 });

