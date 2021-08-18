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
      cy.get('#email_address').type('i.smith@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#confirmation').type('12345678')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.')
         
    })
   
    it('Check the required fields by not filling any data', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').click()
      cy.get('#middlename').click()
      cy.get('#lastname').click()
      cy.get('#email_address').click()
      cy.get('#password').click()
      cy.get('#confirmation').click()
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.get('#form-validate > div.fieldset > p.required').should('have.text','* Required Fields')
  
     })

    it('Check the password when passing only numbers', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Jake')
      cy.get('#middlename').click()
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('jeeessx.smith@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#confirmation').type('12345678')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.') 
    
    })

    it('Check the password limit when enter value less than min', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Hank')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('hank.smith@gmail.com')
      cy.get('#password').type('1234a')
      cy.get('#confirmation').type('1234a')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.get('#advice-validate-password-password').should('have.text','Please enter 6 or more characters without leading or trailing spaces.')
  
    
    })
  
    it('Check the password when entering alphanumeric data', () => {
      cy.get('.skip-account').click()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('Thomas')
      cy.get('#middlename').type('Samuel')
      cy.get('#lastname').type('Smith')
      cy.get('#email_address').type('thocccma.smith@gmail.com')
      cy.get('#password').type('abcd1234@')
      cy.get('#confirmation').type('abcd1234@')
      cy.get('.control > label').click()
      cy.get('.buttons-set > .button').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.')
  
    
    })
  
  })

