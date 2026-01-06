export class SedePage {

    //clicar no submenu Sede Social
    clickSedeSocial() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(2) > a')
            .should("be.visible")
        cy.contains("Sede Social")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(2) > a')
            .click()
    }

    //validar página após clicar no submenu Sede Social
    validateSedeSocial() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "CLUBE - SEDE SOCIAL")
    }

    //clicar no submenu Visitas
    clickVisitas() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(3) > a')
            .should("be.visible")
        cy.contains("Visitas")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(3) > a')
            .click()
    }

    //validar página após clicar no submenu Visitas
    validateVisitas() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Visitas")
    }

    //clicar no submenu Memorial Corinthians
    clickMemorialCorinthians() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(4) > a')
            .should("be.visible")
        cy.contains("Memorial Corinthians")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(4) > a')
            .click()
    }

    //validar página após clicar no submenu Memorial Corinthians
    validateMemorialCorinthians() {
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar no submenu Teatro Corinthians
    clickTeatroCorinthians() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(5) > a')
            .should("be.visible")
        cy.contains("Teatro Corinthians")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(5) > a')
            .click()
    }

    //validar página após clicar no submenu Teatro Corinthians
    validateTeatroCorinthians() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Teatro Corinthians")
    }

    //clicar no submenu Salão Nobre
    clickSalaoNobre() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(6) > a')
            .should("be.visible")
        cy.contains("Salão Nobre")
            .should("be.visible")
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(6) > a')
            .click()
    }

    //validar página após clicar no submenu Salão Nobre
    validateSalaoNobre() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Salão Nobre")
    }

    //clicar no submenu Coworking
    clickCoworking() {
        cy.get(':nth-child(3) > .mb-3 > :nth-child(7) > a')
            .should("be.visible")
        cy.contains("Coworking")
            .should("be.visible")
        cy.get(':nth-child(3) > .mb-3 > :nth-child(7) > a')
            .click()
    }

    //validar página após clicar no submenu Coworking
    validateCoworking() {
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar no submenu Espaço Kids
    clickEspacoKids() {
        cy.get(':nth-child(3) > .mb-3 > :nth-child(8) > a')
            .should("be.visible")
        cy.contains("Espaço Kids")
            .should("be.visible")
        cy.get(':nth-child(3) > .mb-3 > :nth-child(8) > a')
            .click()
    }

    //validar página após clicar no submenu Espaço Kids
    validateEspacoKids() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Espaço Kids")
    }

    //clicar no submenu Skate Park
    clickSkateParks() {
        cy.get(':nth-child(3) > .mb-3 > :nth-child(9) > a')
            .should("be.visible")
        cy.contains("Skate Park")
            .should("be.visible")
        cy.get(':nth-child(3) > .mb-3 > :nth-child(9) > a')
            .click()
    }

    //validar página após clicar no submenu Skate Park
    validateSkatePark() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Skate Park")
    }

    //clicar no submenu Fiel Móvel
    clickFielMovel() {
        cy.get(':nth-child(3) > .mb-3 > :nth-child(10) > a')
            .should("be.visible")
        cy.contains("Fiel Móvel")
            .should("be.visible")
        cy.get(':nth-child(3) > .mb-3 > :nth-child(10) > a')
            .click()
    }

    //validar página após clicar no submenu Fiel Móvel
    validateFielMovel() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Fiel Móvel")
    }

    //clicar no submenu Seja Sócio
    clickSejaSocio() {
        cy.get(':nth-child(3) > .mb-3 > :nth-child(11) > a')
            .should("be.visible")
        cy.contains("Seja Sócio")
            .should("be.visible")
        cy.get(':nth-child(3) > .mb-3 > :nth-child(11) > a')
            .click()
    }

    //validar página após clicar no submenu Seja Sócio
    validateSejaSocio() {
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar no submenu Portal do Associado
    clickPortalAssociado() {
        cy.get(':nth-child(3) > .mb-3 > :nth-child(12) > a')
            .should("be.visible")
        cy.contains("Portal do Associado")
            .should("be.visible")
        cy.get(':nth-child(3) > .mb-3 > :nth-child(12) > a')
            .click()
    }

    //validar página após clicar no submenu Portal do Associado
    validatePortalAssociado() {
        cy.get('header > h1')
            .should("be.visible")
            .and("contain.text", "Portal do Associado")
    }
}