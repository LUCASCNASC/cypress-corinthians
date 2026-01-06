export class MenuClubePage {

    //clicar no menu CLUBE e validar
    clickClube() {
        cy.get('.menu-items-left > .ct-flex-align-center > :nth-child(1) > .ct-submenu-trigger').click()
    }

    //validar "Sobre o Conrinthians"
    validateSobreCorinthians() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(1) > .mb-3 > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Sobre o Corinthians")
    }

    //validar "Organograma"

    validateOrganograma() {
        cy.get('.mb-3 > :nth-child(6) > strong')
            .should("be.visible")
            .and("contain.text", "Organograma")
    }
    //validar "Departamentos"
    validateDepartamentos() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(2) > .mb-3 > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Departamentos")
    }
    //validar "Fale Conosco"
    validateFaleConosco() {
        cy.get('.mb-3 > :nth-child(10) > strong')
            .should("be.visible")
            .and("contain.text", "Fale Conosco")
    }
    //validar "Sede"
    validateSede() {
        cy.get('.ct-active > .ct-submenu > .row > :nth-child(3) > .mb-3 > :nth-child(1) > strong')
            .should("be.visible")
            .and("contain.text", "Sede")
    }
}