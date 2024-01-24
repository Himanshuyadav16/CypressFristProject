
describe('Google Example', () => {
  beforeEach(() => {
    cy.visit('https://thedermaco.com/')
  })

  it('HomePage Dermaco', () => {
   //cy.get('#wzrk-confirm-id',{timeout:4000}).click()
    cy.get('.sc-gGCbJM',{timeout:5000}).click()
    cy.get('.sc-isBZXS',{timeout:7000}).click()
cy.get('#shopping_cart_black_24dp',{timeout:5000}).click()
    //cy.get('.sc-kPVwWT',{timeout:4000}).click()
    cy.get('.sc-cHGsZl',{timeout:5000}).click()
    cy.get(':nth-child(1) > .sc-jwKygS > :nth-child(1) > .sc-fYxtnH > .uniquewhite > .fCvpnD > .dafUrl > .sc-cHGsZl',{timeout:5000}).click()
    cy.get('.item-count').click()
    cy.get('.checkout-button',{timeout:3000}).click()
    cy.get('[name="firstname"]').type('Rohit')
    cy.get('[name="lastname"]').type('Sharma')
    cy.get('[name="email"]').type('rohitsharma1607@gmail.com')
    cy.get('[name="telephone"]',{timeout:7000}).type('7987383043');
    cy.get('[name="postcode"]').type('452001');
    cy.get('[name="city"]').type('Indore');
    cy.get('[name="region"]',{timeout:9000}).type('Madhya Pradesh');
    cy.get('[name="street"]',{timeout:9000}).type('11/3,Radha swami nagar,Indore');



  })
  })