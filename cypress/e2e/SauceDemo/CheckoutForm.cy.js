
//Checkoutform verification for NSW
describe('Checkout form verification for NSW', () => {
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
    it('Verify filling the checkout form after adding item to cart an dnavigating to cart page', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.xpath('//*[@class="shopping_cart_link"]').should('have.text','3')
        cy.setCookie('session-username', 'standard_user')
        cy.get('.shopping_cart_badge').click()
        cy.contains('Sauce Labs Backpack').should('have.text','Sauce Labs Backpack')
        cy.contains('Sauce Labs Bike Light').should('have.text','Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bolt T-Shirt').should('have.text','Sauce Labs Bolt T-Shirt')
        cy.get('#checkout').click()
        cy.get('#first-name').type('Customer First Name')
        cy.get('#last-name').type('Customer Last Name')
        cy.fixture('States.json').then(function (postcode) {
            this.postcode = postcode
            cy.get('#postal-code').type(this.postcode[0].NSW)
            cy.get('#continue').click()
        })
    })
    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

})


//Checkoutform verification for Victoria
describe('Checkout form verification for Victoria', () => {
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
    it('Verify filling the checkout form after adding item to cart an dnavigating to cart page', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.xpath('//*[@class="shopping_cart_link"]').should('have.text', '3')
        cy.setCookie('session-username', 'standard_user')
        cy.get('.shopping_cart_badge').click()
        cy.contains('Sauce Labs Backpack').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Bike Light').should('have.text', 'Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bolt T-Shirt').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('#checkout').click()
        cy.get('#first-name').type('Customer First Name')
        cy.get('#last-name').type('Customer Last Name')
        cy.fixture('States.json').then(function (postcode) {
            this.postcode = postcode
            cy.get('#postal-code').type(this.postcode[1].Victoria)
            cy.get('#continue').click()
        })
    })
    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

})

//Checkoutform verification for Queensland
describe('Checkout form verification for Queensland', () => {
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
        cy.xpath('//*[@class="shopping_cart_link"]').should('have.text', '3')
        cy.setCookie('session-username', 'standard_user')
        cy.get('.shopping_cart_badge').click()
        cy.contains('Sauce Labs Backpack').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Bike Light').should('have.text', 'Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bolt T-Shirt').should('have.text', 'Sauce Labs Bolt T-Shirt')

        cy.get('#checkout').click()
        cy.get('#first-name').type('Customer First Name')
        cy.get('#last-name').type('Customer Last Name')
        cy.fixture('States.json').then(function (postcode) {
            this.postcode = postcode
            cy.get('#postal-code').type(this.postcode[2].Queensland)
            cy.get('#continue').click()
        })
    })
    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

})

//Checkoutform verification for WA
describe('Checkout form verification for WA', () => {
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
    it('Verify filling the checkout form after adding item to cart an dnavigating to cart page', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.xpath('//*[@class="shopping_cart_link"]').should('have.text', '3')
        cy.setCookie('session-username', 'standard_user')
        cy.get('.shopping_cart_badge').click()
        cy.contains('Sauce Labs Backpack').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Bike Light').should('have.text', 'Sauce Labs Bike Light')
        cy.contains('Sauce Labs Bolt T-Shirt').should('have.text', 'Sauce Labs Bolt T-Shirt')
    
        cy.get('#checkout').click()
        cy.get('#first-name').type('Customer First Name')
        cy.get('#last-name').type('Customer Last Name')
        cy.fixture('States.json').then(function (postcode) {
            this.postcode = postcode
            cy.get('#postal-code').type(this.postcode[3].WA)
            cy.get('#continue').click()
        })
    })
    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

})

