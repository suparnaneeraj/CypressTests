
describe('Products Functionality', () => {
    it('should add a product to cart', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.location('pathname').should('eq', '/v1/inventory.html');  ///to check if webpage is /v1/inventory.html
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').parents('.inventory_item').contains('ADD TO CART').click()

    })
    it('should allow selection between pages', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        //cy.contains('Open Menu').click();
        //cy.get('#about_sidebar_link').click();
        cy.get('#shopping_cart_container').click()
        cy.location('pathname').should('eq', '/v1/cart.html');
        cy.go('back')
        cy.location('pathname').should('eq', '/v1/inventory.html');
    })
})
