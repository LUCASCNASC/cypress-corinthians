export class OrganogramaPage {

    //clicar no submenu Presidência e Diretoria
    clickPresidenciaDiretoria() {
        cy.get(':nth-child(1) > .mb-3 > :nth-child(7) > a')
            .should("be.visible")
        cy.contains("Presidência e Diretoria")
            .should("be.visible")
        cy.get(':nth-child(1) > .mb-3 > :nth-child(7) > a')
            .click()
    }

    //validar página após clicar no submenu Presidência e Diretoria
    validatePresidenciaDiretoria() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Presidência e Diretoria")
    }

    //clicar no submenu Conselho Deliberativo
    clickConselhoDeliberativo() {
        cy.get(':nth-child(1) > .mb-3 > :nth-child(8) > a')
            .should("be.visible")
        cy.contains("Conselho Deliberativo")
            .should("be.visible")
        cy.get(':nth-child(1) > .mb-3 > :nth-child(8) > a')
            .click()
    }

    //validar página após clicar no submenu Conselho Deliberativo
    validateConselhoDeliberativo() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Conselho Deliberativo")
    }

    //clicar no submenu Conselho Fiscal
    clickConselhoFiscal() {
        cy.get(':nth-child(1) > .mb-3 > :nth-child(9) > a')
            .should("be.visible")
        cy.contains("Conselho Fiscal")
            .should("be.visible")
        cy.get(':nth-child(1) > .mb-3 > :nth-child(9) > a')
            .click()
    }

    //validar página após clicar no submenu Conselho Fiscal
    validateConselhoFiscal() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Conselho Fiscal")
    }

    //clicar no submenu CORI
    clickCori() {
        cy.get(':nth-child(1) > .mb-3 > :nth-child(10) > a')
            .should("be.visible")
        cy.contains("CORI")
            .should("be.visible")
        cy.get(':nth-child(1) > .mb-3 > :nth-child(10) > a')
            .click()
    }

    //validar página após clicar no submenu CORI
    validateCori() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "CORI")
    }
}