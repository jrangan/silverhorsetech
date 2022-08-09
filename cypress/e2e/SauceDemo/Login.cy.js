describe('Login Scenarios', () => {
  it('Verify successful Login for valid username and password', () => {
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

  it('Logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  })

  it('Verify unsuccessful Login for invalid password', () => {
    cy.visit('/')
    cy.fixture('UserName.json').then(function (username) {
      this.username = username
      cy.get('#user-name').type(this.username[0].UserName)
      cy.fixture('Password.json').then(function (password) {
        this.password = password
        cy.get('#password').type(this.password[1].InvalidPassword)
        cy.get('#login-button').click()
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
      })
    })
  })

  it('Verify error message for Locked Out User', () => {
    cy.visit('/')
    cy.fixture('UserName.json').then(function (username) {
      this.username = username
      cy.get('#user-name').type(this.username[1].UserName)
      cy.fixture('Password.json').then(function (password) {
        this.password = password
        cy.get('#password').type(this.password[0].ValidPassword)
        cy.get('#login-button').click()
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
      })
    })
  })
})
