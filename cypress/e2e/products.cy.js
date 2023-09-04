describe('Products Functionality', () => {
    it('should add a product to cart', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').parents('.inventory_item').contains('ADD TO CART').click()

    })
})
