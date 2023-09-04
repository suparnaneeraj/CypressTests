describe('Login Functionality Tests', () => {
    const errormessage = 'Username and password do not match any user in this service'
    it('should login successfully', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('have.text', 'Products')
    })
    it('should give error on invalid login', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_use')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('h3').contains(errormessage)
    })
})
