describe('Add to Cart Scenarios', () => {
    it('Login with valid valid username and password', () => {
        //BaseURL is configured in cypress.config.js, so that anytime we want change the environment only the config must be changed and not the tests
        cy.visit('/')
        cy.fixture('UserName.json').then(function (username) {
            this.username = username
            cy.get('#user-name').type(this.username[0].UserName)
            cy.fixture('Password.json').then(function (password) {
                this.password = password
                cy.get('#password').type(this.password[0].ValidPassword)
                cy.get('#login-button').click()
                cy.contains('Products').should('have.text', 'Products')
            })
        })
    })
    it('Sort by Price high to low', () => {
        cy.get('[data-test="product_sort_container"]').select('Price (high to low)')
        cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('include.text', '$49.99')
    })

})