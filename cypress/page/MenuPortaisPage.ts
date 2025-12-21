export class MenuPortaisPage {

    //clicar no menu Portais
    clickPortais() {
        cy.get('#pv_id_1_3 > :nth-child(1) > .p-menubar-item-link').click()
    }

    //clicar no submenu Aceleração Econômica e Turismo
    clickAceleracaoEconomicaTurismo() {
        cy.get('#pv_id_1_3_0 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu AFMM
    clickAFMM() {
        cy.get('#pv_id_1_3_1 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Agência Maringá de Tecnologia e Inovação
    clickAgenciaMaringaTecnologiaInovacao() {
        cy.get('#pv_id_1_3_2 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Assistência Social, Políticas sobre as Drogas e Pessoa Idosa
    clickAssistenciaSocialPoliticasDrogasPessoaIdosa() {
        cy.get('#pv_id_1_3_3 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Compliance e Controle
    clickComplianceControle() {
        cy.get('#pv_id_1_3_4 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Criança e Adolescente
    clickCriancaAdolescente() {
        cy.get('#pv_id_1_3_5 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Cultura
    clickCultura() {
        cy.get('#pv_id_1_3_6 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Educação
    clickEducacao() {
        cy.get('#pv_id_1_3_7 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Esporte e Lazer
    clickEsporteLazer() {
        cy.get('#pv_id_1_3_8 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Fazenda
    clickFazenda() {
        cy.get('#pv_id_1_3_9 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Gestão de Pessoas
    clickGestaoDePessoas() {
        cy.get('#pv_id_1_3_10 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Infraestrutura
    clickInfraestrutura() {
        cy.get('#pv_id_1_3_11 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Instituto Ambiental de Maringá (IAM)
    clickInstitutoAmbientalMaringa() {
        cy.get('#pv_id_1_3_12 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Instituto de Pesquisa e Planejamento Urbano de Maringá (IPPLAM)
    clickInstitutoPesquisaPlanejamentoUrbanoMaringa() {
        cy.get('#pv_id_1_3_13 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Juventude, Cidadania e Migrantes
    clickJuventudeCidadaniaMigrantes() {
        cy.get('#pv_id_1_3_14 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Logística e Compras
    clickLogisticaCompras() {
        cy.get('#pv_id_1_3_15 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Maringá Previdência
    clickMaringaPrevidencia() {
        cy.get('#pv_id_1_3_16 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Mobilidade Urbana
    clickMobilidadeUrbana() {
        cy.get('#pv_id_1_3_17 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Mulher
    clickMulher() {
        cy.get('#pv_id_1_3_18 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Obras públicas
    clickObrasPublicas() {
        cy.get('#pv_id_1_3_19 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Procon
    clickProcon() {
        cy.get('#pv_id_1_3_20 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Procuradoria-geral
    clickProcuradoriaGeral() {
        cy.get('#pv_id_1_3_21 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Saúde
    clickSaude() {
        cy.get('#pv_id_1_3_22 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Segurança
    clickSeguranca() {
        cy.get('#pv_id_1_3_23 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Turismo Maringá
    clickTurismoMaringa() {
        cy.get('#pv_id_1_3_24 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no submenu Urbanismo e Habitação
    clickUrbanismoHabitação() {
        cy.get('#pv_id_1_3_25 > .p-menubar-item-content > .p-menubar-item-link').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

}