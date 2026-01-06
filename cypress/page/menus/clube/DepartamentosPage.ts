export class DepartamentosPage {

    //clicar no submenu Departamento Cultural
    clickDepartamentoCultural() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(2) > a')
            .should("be.visible")
        cy.contains("Departamento Cultural")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(2) > a')
            .click()
    }

    //validar página após clicar no submenu Departamento Cultural
    validateDepartamentoCultural() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Departamento Cultural")
    }

    //clicar no submenu Apoio Cultural
    clickApoioCultural() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(3) > a')
            .should("be.visible")
        cy.contains("Apoio Cultural")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(3) > a')
            .click()
    }

    //validar página após clicar no submenu Apoio Cultural
    validateApoioCultural() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Apoio Cultural Corinthians")
    }

    //clicar no submenu Responsabilidade Social
    clickResponsabilidadeSocial() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(4) > a')
            .should("be.visible")
        cy.contains("Responsabilidade Social")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(4) > a')
            .click()
    }

    //validar página após clicar no submenu Responsabilidade Social
    validateResponsabilidadeSocial() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Responsabilidade Social")
    }

    //clicar no submenu Departamento Médico
    clickDepartamentoMedico() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(5) > a')
            .should("be.visible")
        cy.contains("Departamento Médico")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(5) > a')
            .click()
    }

    //validar página após clicar no submenu Departamento Médico
    validateDepartamentoMedico() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Departamento Médico")
    }

    //clicar no submenu Departamento Social
    clickDepartamentoSocial() {
        cy.get(':nth-child(2) > .mb-3 > :nth-child(6) > a')
            .should("be.visible")
        cy.contains("Departamento Social")
            .should("be.visible")
        cy.get(':nth-child(2) > .mb-3 > :nth-child(6) > a')
            .click()
    }

    //validar página após clicar no submenu Departamento Social
    validateDepartamentoSocial() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Departamento Social")
    }

    //clicar no submenu Esportes Aquáticos
    clickEsportesAquaticos() {
        cy.get(':nth-child(2) > .mb-3 > :nth-child(7) > a')
            .should("be.visible")
        cy.contains("Esportes Aquáticos")
            .should("be.visible")
        cy.get(':nth-child(2) > .mb-3 > :nth-child(7) > a')
            .click()
    }

    //validar página após clicar no submenu Esportes Aquáticos
    validateEsportesAquaticos() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Esportes Aquáticos")
    }

    //clicar no submenu Esportes Terrestres
    clickEsportesTerrestres() {
        cy.get(':nth-child(2) > .mb-3 > :nth-child(8) > a')
            .should("be.visible")
        cy.contains("Esportes Terrestres")
            .should("be.visible")
        cy.get(':nth-child(2) > .mb-3 > :nth-child(8) > a')
            .click()
    }

    //validar página após clicar no submenu Esportes Terrestres
    validateEsportesTerrestres() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Esportes Terrestres")
    }
}