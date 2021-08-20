describe('Check Homepage', () => {
    beforeEach(() => {
  
      cy.visit('https://parabank.parasoft.com/parabank/about.htm')
  
    })
    it('Check the Customer care functionality', () => {
      cy.get('.contact > a').should('be.visible').click()
      cy.get('#name').type('Mike')
      cy.get('#email').type('Smith')
      cy.get('#phone').type('0987654321')
      cy.get('#message').type('I understand and appreciate your banks policy on quick service. I was, however, not impressed with the abrupt way your teller, Jane Doe, served me this morning. After cashing a check at the window, I asked her if she would verify my savings balance. She told me with some exasperation to wait and then retrieved the information. She then called "Next, please," before I had a chance to look the statement over to see if I had any questions.')
      cy.get('[colspan="2"] > .button').should('be.visible').click()
      
      cy.get('#rightPanel > :nth-child(3)').should('have.text','A Customer Care Representative will be contacting you.')
    })

    it('Check the Bill pay functionality as a registered customer by filling in all the fields', () => {
      cy.get(':nth-child(2) > .input').type('mikesmith')
      cy.get(':nth-child(4) > .input').type('12345678')
      cy.get(':nth-child(5) > .button').should('be.visible').click()
      cy.get('thead > tr > :nth-child(2)').should('have.text','Balance*')
      cy.get('#leftPanel > ul > :nth-child(4) > a').should('have.text','Bill Pay').click()
      cy.get(':nth-child(1) > [width="20%"] > .input').type('Mike Smith')
      cy.get(':nth-child(2) > [width="20%"] > .input').type('6th Avenue')
      cy.get(':nth-child(3) > [width="20%"] > .input').type('California')
      cy.get(':nth-child(4) > [width="20%"] > .input').type('United States')
      cy.get(':nth-child(5) > [width="20%"] > .input').type('90012')
      cy.get(':nth-child(6) > [width="20%"]').type('339876543')
      cy.get(':nth-child(8) > :nth-child(2) > .input').type('13645')
      cy.get(':nth-child(9) > [width="20%"] > .input').type('13645')
      cy.get(':nth-child(11) > [width="20%"] > .input').type('200')
      cy.get(':nth-child(13) > :nth-child(2) > .input').select('13677')
      cy.get(':nth-child(14) > :nth-child(2) > .button').click()
      cy.get('[ng-show="showResult"] > .title').should('have.text','Bill Payment Complete')
    })
    it.only('Check the Update Contact Info functionality', () => {
      cy.get(':nth-child(2) > .input').type('mikesmith')
      cy.get(':nth-child(4) > .input').type('12345678')
      cy.get(':nth-child(5) > .button').should('be.visible').click()
      cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').click()
      cy.get('#customer\.firstName').type('Mike Smith')
      cy.get('#customer\\.address\\.street').type('591 Grand Avenue')
      
      cy.get('#customer\.address\.city').clear()
      cy.get('#customer\.address\.city').type('San Marcos')
      cy.get('#customer\.address\.zipCode').clear()
      cy.get('#customer\.address\.zipCode').type('92069')
      cy.get('[colspan="2"] > .button').should('be.visible').click()
  
      
    })
})    