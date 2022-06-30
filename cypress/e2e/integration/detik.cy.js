/// <reference types="cypress" />

describe ('Detik.com',() =>{
    before(() => {
        cy.visit('https://www.detik.com/')
    });
    it('Tag', () => {
        cy.get('article').contains('mypertamina').click()
        cy.url().should('include','/tag')
    });
    it('Foto', () => {
        cy.get('#menu > ul > li').eq(2).click()
        cy.url().should('include','/foto')
    });
    
});