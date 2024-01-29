/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Google Example', () => {
  beforeEach(() => {
    cy.visit('https://thedermaco.com/')
   // cy.get('#wzrk-cancel-id',{timeout:50000}).click();
})

  it('HomePage Dermaco', () => {
//  cy.get('body').then(($body) => {
//    if ($body.find('#wzrk-confirm-id:visible').length > 0) {
//      cy.get('#wzrk-confirm-id').click({ force: true });
//    }

//cy.get('#moe-onsite-campaign-621f56f8b059882e8b8fcd34').click
 // });


             cy.get('.sc-gGCbJM',{timeout:70000}).click()
               cy.get('.sc-isBZXS',{timeout:90000}).click()
               cy.get('#shopping_cart_black_24dp',{timeout:2000}).click()
               //cy.get('.sc-kPVwWT',{timeout:4000}).click()
               cy.get('.sc-cHGsZl',{timeout:2000}).click()
               cy.get(':nth-child(1) > .sc-jwKygS > :nth-child(1) > .sc-fYxtnH > .uniquewhite > .fCvpnD > .dafUrl > .sc-cHGsZl',{timeout:4000}).click()
               cy.get('.item-count').click()
               cy.get('.checkout-button',{timeout:3000}).click()

                cy.get('[name="firstname"]').type('Rohit')
               cy.get('[name="lastname"]').type('Sharma')
               cy.get('[name="email"]',{timeout:150000}).type('rohitsharma1607@gmail.com')
             //  cy.get('#moe-onsite-campaign-621f56f8b059882e8b8fcd34',{timeout:10000})
            // cy.get('#moe-onsite-campaign-621f56f8b059882e8b8fcd34')
               cy.get('[name="telephone"]').click()


               cy.get('[name="telephone"]',{timeout:30000}).type('7987383043');
               cy.get('[name="postcode"]').type('452001');
               cy.get('[name="street"]').type('11/3,Radha swami nagar,Indore');

               cy.get('[name="city"]').type('Indore');
               cy.get('[name="region"]').type('Madhya Pradesh');

  })
  })
