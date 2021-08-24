

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
      register.email().type('ii.smith@gmail.com')
      register.password().type('12345678')
      register.confirmation().type('12345678')
      register.registerbutton().should('be.visible').click()
      cy.get('.buttons-set > .button').should('be.visible').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.') 
    })
  
    
})  