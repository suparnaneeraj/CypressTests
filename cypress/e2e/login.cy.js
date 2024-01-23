///<reference types="Cypress"/>

describe('Login Functionality Tests', () => {
    let data;
    beforeEach(function () {
        cy.fixture('login_test_data.json').then((login_data) => {
            data = login_data
            cy.log(data.url)
            cy.log(data.invalid_credentials.username)

        })
        cy.visit('/login')
    })
    it('should verify successful login', () => {

        cy.get("input[placeholder='Username']").type(data.valid_credentials.username)
        cy.get("input[placeholder='Password']").type(data.valid_credentials.password)
        cy.get('button').click()
        cy.get('.oxd-topbar-header-title').contains('Dashboard')
        cy.get('.oxd-userdropdown-name').click()
        cy.get('.oxd-userdropdown-link').contains('Logout').click()
    })
    it('should throw error on invalid login', () => {
        cy.get("input[placeholder='Username']").type(data.invalid_credentials.username)
        cy.get("input[placeholder='Password']").type(data.invalid_credentials.password)
        cy.get('button').click()
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })

})
