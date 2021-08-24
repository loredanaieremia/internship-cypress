class RegisterPage{
 
    firstname(){
        return cy.get('#firstname')
    }
    middlename(){
        return cy.get('#middlename')
    }
    lastname(){
        return cy.get('#lastname')
    }
    email(){
        return cy.get('#email_address')
    }
    password(){
        return cy.get('#password')
    }
    confirmation(){
        return cy.get('#confirmation')
    }
    registerbutton(){
        return cy.get('.buttons-set > .button')
    }
}

export default RegisterPage