describe('Add to Cart Scenarios', () => {
    it('Login with valid valid username and password', () => {
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
    it('Navigate to product list', () => {
        cy.setCookie('session-username', 'standard_user')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#inventory_sidebar_link').click()
        cy.contains('Products').should('have.text', 'Products')
    })

})