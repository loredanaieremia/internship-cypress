import Login from '../pageObjects/login'

describe('Check Login',function () {
    const login = new Login()
  
    it('Check login functionality when entering valid email and password',function () {
      cy.visit('http://live.demoguru99.com')

      cy.get('.skip-account').should('be.visible').click()
      cy.get('#header-account > .links > ul > .last > a').should('be.visible').click()
      login.email().type('mike.smith@gmail.com')
      login.password().type('12345678')
      login.signInButton().should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.welcome-msg > p.hello > strong').should('have.text','Hello, Mikael Sam Smith!')
    
    })
})