describe('Check Register functionality', () => {
    beforeEach(() => {
      cy.visit('http://live.demoguru99.com')
    })
  
    it('Check register functionality when entering all valid credentials', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Mike')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('iii.smith@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#confirmation').type('12345678')
      cy.get('.control > label').should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.') 
    })
     
    it('Check the required fields by not filling any data', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get(':nth-child(5) > a').should('be.visible').click()
      cy.get('#firstname').click()
      cy.get('#middlename').click()
      cy.get('#lastname').click()
      cy.get('#email_address').click()
      cy.get('#password').click()
      cy.get('#confirmation').click()
      cy.get('.control > label').should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('#form-validate > div.fieldset > p.required').should('have.text','* Required Fields')
     })

     it('Check the password when passing only numbers', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get(':nth-child(5) > a').should('be.visible').click()
      cy.get('#firstname').type('Jake')
      cy.get('#middlename').click()
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('hgex.smith@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#confirmation').type('12345678')
      cy.get('.control > label').should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.') 
      })

      it('Check the password limit when enter value less than min', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get(':nth-child(5) > a').should('be.visible').click()
      cy.get('#firstname').type('Hank')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('hanik.smith@gmail.com')
      cy.get('#password').type('1234a')
      cy.get('#confirmation').type('1234a')
      cy.get('.control > label').should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('#advice-validate-password-password').should('have.text','Please enter 6 or more characters without leading or trailing spaces.')
      })
  
      it('Check the password when entering alphanumeric data', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get(':nth-child(5) > a').should('be.visible').click()
      cy.get('#firstname').type('Thomas')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('thccima.smith@gmail.com')
      cy.get('#password').type('abcd1234@')
      cy.get('#confirmation').type('abcd1234@')
      cy.get('.control > label').should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.')
      })
  
})

describe('Check Login functionality', () => {
    beforeEach(() => {
      cy.visit('http://live.demoguru99.com')
    })
  
    it('Check login functionality when entering valid email and password', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
      cy.get('#email').type('mike.smith@gmail.com')
      cy.get('#pass').type('12345678')
      cy.get('#send2').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.welcome-msg > p.hello > strong').should('have.text','Hello, Mikael Sam Smith!')
    })

  
    it('Verify that the User is not able to log in with a blank Username or Password', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
      cy.get('#email').click()
      cy.get('#pass').click()
      cy.get('#send2').should('be.visible').click()
      cy.get('#login-form > div > div.col-2.registered-users > div.content.fieldset > p.required').should('have.text','* Required Fields')
    })

  
    it('Check login functionality when entering wrong email and correct pw', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
      cy.get('#email').type('mike.smit@gmail.com')
      cy.get('#pass').type('12345678')
      cy.get('#send2').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Invalid login or password.')
    })
  

  
  
    it('Check login functionality when entering invalid email and invalid pw', () => {
        cy.get('.skip-account').should('be.visible').click()
        cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
        cy.get('#email').type('mike.smit@gmail.com')
        cy.get('#pass').type('1234567')
        cy.get('#send2').should('be.visible').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Invalid login or password.')
    })
  

  
    it('Verify that the User is not able to log in with a blank Username or Password', () => {
      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
      cy.get('#email').click()
      cy.get('#pass').click()
      cy.get('#send2').click()
      cy.get('#login-form > div > div.col-2.registered-users > div.content.fieldset > p.required').should('have.text','* Required Fields')

    })
  
})  