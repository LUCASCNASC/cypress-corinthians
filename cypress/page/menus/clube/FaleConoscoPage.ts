export class FaleConoscoPage {

    //clicar no submenu Contatos
    clickContatos() {
        cy.get(':nth-child(2) > .mb-3 > :nth-child(11) > a')
            .should("be.visible")
        cy.contains("Contatos")
            .should("be.visible")
        cy.get(':nth-child(2) > .mb-3 > :nth-child(11) > a')
            .click()
    }

    //validar página após clicar no submenu Contatos
    validateContatos() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Contatos")
    }

    //clicar no submenu Ouvidoria
    clickOuvidoria() {
        cy.get(':nth-child(2) > .mb-3 > :nth-child(12) > a')
            .should("be.visible")
        cy.contains("Ouvidoria")
            .should("be.visible")
        cy.get(':nth-child(2) > .mb-3 > :nth-child(12) > a')
            .click()
    }

    //validar página após clicar no submenu Ouvidoria
    validateOuvidoria() {
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }
}