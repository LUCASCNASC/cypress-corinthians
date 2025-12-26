export class MenusHeaderPage {

    //clicar no ACESSO A INFORMAÇÃO
    clickAcessoInformacao() {
        cy.contains('span', 'ACESSO À INFORMAÇÃO')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no CARTA DE SERVIÇOS
    clickCartaServicos() {
        cy.contains('span', 'CARTA DE SERVIÇOS')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no INTRANET
    clickIntranet() {
        cy.contains('span', 'INTRANET')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no MAPAS E LEIS
    clickMapasLeis() {
        cy.contains('span', 'MAPAS E LEIS')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no OUVIDORIA (156)
    clickOuvidoria() {
        cy.contains('span', 'OUVIDORIA')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no PORTAL DO SERVIDOR
    clickPortalServidor() {
        cy.contains('span', 'PORTAL DO SERVIDOR')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no RADAR DA TRANSPARÊNCIA
    clickRadarTransferencia() {
        cy.contains('span', 'RADAR DA TRANSPARÊNCIA')
            .should('be.visible')
            .click()
        
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}