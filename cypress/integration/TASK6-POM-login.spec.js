
import LoginPage from "../support/pageObjects/LoginPage"

describe('Login', function ()  {
    const login = new LoginPage()
    beforeEach(() => {
      cy.visit('http://live.demoguru99.com')
    })
  
  it('Check login functionality when entering valid email and password', function ()  {
      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
      login.email().type('mike.smith@gmail.com')
      login.password().type('12345678')
      login.LogInbutton().should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.welcome-msg > p.hello > strong').should('have.text','Hello, Mikael Sam Smith!')
  })

import RegisterPage from "../support/pageObjects/RegisterPage"

  describe('Check Register functionality',  function () {
    const register = new RegisterPage()
    beforeEach(() => {
      cy.visit('http://live.demoguru99.com')
    })
  
    it('Check register functionality when entering all valid credentials', function () {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      register.firstname().type('Mike')
      register.middlename().type('Samuel')
      register.lastname().type('Smith')
      register.email().type('iii.smith@gmail.com')
      register.password().type('12345678')
      register.confirmation().type('12345678')
      register.registerbutton().should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.') 
    })
  })
    
})  