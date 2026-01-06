export class SobreCorinthiansPage {

    //clicar no submenu História
    clickHistoria() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(2) > a')
            .should("be.visible")
        cy.contains("História")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(2) > a')
            .click()
    }

    //validar página após clicar no submenu História
    validateHistoria() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "CLUBE – HISTÓRIA")

        cy.get('header > h2')
            .should("be.visible")
            .and("contain.text", "Conheça a história do SCCP.")
    }

    //clicar no submenu Títulos
    clickTitulos() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(3) > a')
            .should("be.visible")
        cy.contains("Títulos")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(3) > a')
            .click()
    }

    //validar página após clicar no submenu Títulos
    validateTitulos() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "CLUBE - TÍTULOS")
    }

    //clicar no submenu Identidade
    clickIdentidade() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(4) > a')
            .should("be.visible")
        cy.contains("Identidade")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(4) > a')
            .click()
    }

    //validar página após clicar no submenu Identidade
    validateIdentidade() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "CLUBE - IDENTIDADE")
    }
}