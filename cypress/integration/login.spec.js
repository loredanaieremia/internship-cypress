describe('Check Login functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check login functionality when entering valid email and password', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smith@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.welcome-msg > p.hello > strong').should('have.text','Hello, Mike Samuel Smith!')
    
    })


  })

  
  
  describe('Check Login functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Verify that the User is not able to log in with a blank Username or Password', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').click()
        cy.get('#pass').click()
        cy.get('#send2').click()
        cy.get('#login-form > div > div.col-2.registered-users > div.content.fieldset > p.required').should('have.text','* Required Fields')
    
    })
  
  })
  

  
  describe('Check Login functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check login functionality when entering wrong email and correct pw', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smit@gmail.com')
        cy.get('#pass').type('12345678')
        cy.get('#send2').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Invalid login or password.')
  
    
    })
  
  })
  
  describe('Check Login functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Check login functionality when entering invalid email and invalid pw', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('mike.smit@gmail.com')
        cy.get('#pass').type('1234567')
        cy.get('#send2').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Invalid login or password.')
  
    
    })
  
  }) 
  
  describe('Check Login functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Verify that the User is not able to log in with a blank Username or Password', () => {
      
        cy.get('.skip-account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').click()
        cy.get('#pass').click()
        cy.get('#send2').click()
        cy.get('#login-form > div > div.col-2.registered-users > div.content.fieldset > p.required').should('have.text','* Required Fields')
    
    })
  
  })  