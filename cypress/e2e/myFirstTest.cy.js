
describe('Google Example', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.google.com/')
  })

  it('google to youtube', () => {
cy.get('#APjFqb').type('youtube')
cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb',{timeout:13000}).click()
  })

  })
