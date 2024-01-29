describe('SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
  })

  it('Register Page', () => {
cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click()
cy.get('#input-firstname').type('Rohit')
cy.get('#input-lastname').type('sharma')
var randomEmail= "userName"+Math.round(Math.random()*100000)+"@email.com";
cy.get('#input-email').type(randomEmail)
cy.get('#input-telephone').type('9826845546')
cy.get('#input-password').type('Rohit@123')
cy.get('#input-confirm').type('Rohit@123')
cy.get('.float-right > .custom-control').click()
cy.get('.float-right > .btn').click()
cy.get('.buttons > .btn').click()
cy.get('#entry_217825 > .cart > .cart-icon > .badge').click()
cy.get('#entry_217850 > .icon-right').click()
cy.get('.buttons > .btn').click()
cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(2) > .icon-left > .info > .title').click()
cy.get('.nav > [href="https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=20"]').click()
cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link').click()
  })

  })
