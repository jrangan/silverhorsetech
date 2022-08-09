import { Total } from "../Total"

const total = new Total()

describe('Checkout form verification for WA', () => {
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
    it('Verify filling the checkout form after adding item to cart an dnavigating to cart page', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    //Verify cart count is correct
        cy.xpath('//*[@class="shopping_cart_link"]').should('have.text', '3')

    //Verify Items added are present in cart.html page
        cy.setCookie('session-username', 'standard_user')
        cy.get('.shopping_cart_badge').click()
        cy.contains('Sauce Labs Backpack').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Bike Light').should('have.text', 'Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bolt T-Shirt').should('have.text', 'Sauce Labs Bolt T-Shirt')

    //Click on Checkout button and fill the form 
        cy.get('#checkout').click()
        cy.get('#first-name').type('Customer First Name')
        cy.get('#last-name').type('Customer Last Name')
        cy.fixture('States.json').then(function (postcode) {
            this.postcode = postcode
            cy.get('#postal-code').type(this.postcode[3].WA)
            cy.get('#continue').click()

    // Verify Items are present in checkout step two page
        cy.contains('Sauce Labs Backpack').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Bike Light').should('have.text', 'Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bolt T-Shirt').should('have.text', 'Sauce Labs Bolt T-Shirt')
        })
    })
    // Verify the total is correct
    it("Verify total is correct and finish the transaction", () => {

        var item1 = (total.SauceLabsBackpack())
        cy.log(item1)
        var item2 = total.SauceLabsBikeLight()
        var item3 = total.SauceLabsBoltTShirt()
        var sum = item1 + item2 + item3
        cy.get('.summary_subtotal_label').should('include.text', 'Item total: $55.97')

    //Verify clicking on finish button and complete the transaction
        cy.setCookie('session-username', 'standard_user')
        cy.get('#finish').click()
        cy.contains('THANK YOU FOR YOUR ORDER').should('have.text', 'THANK YOU FOR YOUR ORDER')
    })


    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })


})
