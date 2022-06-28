/// <reference types="cypress" />

describe ('Login',() =>{
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Login Process', () => {
        cy.fixture("userSauce").then(userSauce =>{
            const uName = userSauce.ussr
            const uPass = userSauce.pswd
            cy.login(uName,uPass)
        })
    });
    
});

describe ('Checkout',() =>{
    it('Click Add To Cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    });

    it('Click Cart Icon', () => {
        cy.get('#shopping_cart_container').click()
        cy.fixture("userSauce").then(userSauce =>{
            const uName = userSauce.ussr
            const uPass = userSauce.pswd
            cy.login(uName,uPass)
        })
        cy.url().should('include','cart.html')
    });
    it('Click Checkout Button', () => {
        cy.get('#checkout').click()
        cy.pause()
    });
    
    it('Address form fill', () => {
        cy.fixture("userSauce").then(userSauce =>{
            const firstName = userSauce.fName
            const lastName= userSauce.lName
            const postal= userSauce.postalCode
            cy.get('#first-name').clear()
            cy.get('input[name="lastName"]').clear()
            cy.get('#postal-code').clear()
            cy.get('#first-name').type(firstName)
            cy.get('input[name="lastName"]').type(lastName)
            cy.get('#postal-code').type(postal)
        })
    });
    it('Click Continue button', () => {
        cy.get('#continue').click()
        cy.url().should('include','checkout-step-two.html')
    });
    it('Click Finish button', () => {
        cy.get('#finish').click()
        cy.url().should('include','checkout-complete.html')
    });
});