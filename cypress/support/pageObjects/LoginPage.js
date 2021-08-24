class LoginPage {
    email(){
        return cy.get('#email')
    }
    password(){
        return cy.get('#pass')
    }
    LogInbutton(){
        return cy.get('#send2').contains('Login')
    }
}

export default LoginPage
