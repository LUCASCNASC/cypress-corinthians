export class CidadaoPage {

    //clicar no menu Cidadão
    clickCidadao() {
        cy.get('#pv_id_2_tab_0').click();
    }

    //clicar na opção Farmácia Móvel
    clickFarmaciaMovel() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://storage.maringa.pr.gov.br/1/61e19a2a-c2e7-4235-82e3-5a04a98389a0.pdf"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Resid. Médica Edital ...
    clickResidMedicaEdital() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://sisweb.maringa.pr.gov.br/residmed-2026/index.php"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção PSS Educação 2025
    clickPSSEducacao() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://main.institutounifil.com.br/concurso/169"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção PSS Saúde 2025
    clickPSSSaude() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://sisweb.maringa.pr.gov.br/psssaude2025/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Agenda Previsão de Pagamento
    clickAgendaPrevisaoPagamento() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://maringa.oxy.elotech.com.br/portaltransparencia/1/agenda-previsao-pagamento"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Vacinação
    clickVacinacao() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://storage.maringa.pr.gov.br/1/271d7318-1b07-4a1c-8514-ce726463cc77.pdf"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção leis do Município
    clickLeisMunicipio() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://leismunicipais.com.br/prefeitura/pr/maringa"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Estágio
    clickEstagio() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://sisweb.maringa.pr.gov.br:81/rhInscricaoEstagiarios/inscricao/index"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Carta de Serviços
    clickCartaServicos() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://www.maringa.pr.gov.br/carta-servico"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção SEI
    clickSEI() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://webpmm.maringa.pr.gov.br/portal-do-sei/home/peticionamento"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Passe do Estudante
    clickPasseEstudante() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://sisweb.maringa.pr.gov.br:8090/PasseEstudante/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Consulta Concursos
    clickConsultaConcursos() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www3.maringa.pr.gov.br/site/index.php?sessao=30e927f10f8130"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Diário Oficial
    clickDiarioOficial() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://orgao-oficial.maringa.pr.gov.br"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção EMISSÃO DE GUIAS/BOLETOS
    clickEmissaoGuiasBoletos() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://cidadao.maringa.pr.gov.br/portal-contribuinte/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Emissão de Certidões
    clickEmissaoCertidoes() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://cidadao.maringa.pr.gov.br/portal-contribuinte/inicio"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Plano Diretor
    clickPlanoDiretor() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www3.maringa.pr.gov.br/portal/?cod=portal/21/revisaoplanodiretor"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção FAQ - LGPD
    clickFaqLGPD() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www3.maringa.pr.gov.br/faq/lgpd/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Portal Maringá compra
    clickPortalMaringaCompra() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://www.maringa.pr.gov.br/maringacompra/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Notifica Saúde
    clickNotificaSaude() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www3.maringa.pr.gov.br/notificasaude/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Portal Saúde Maringá
    clickPortalSaudeMaringa() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www3.maringa.pr.gov.br/saude/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Sala digital do microempreendedor
    clickSalaDigitalMicroempreendedor() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www.maringa.pr.gov.br/saladoempreendedor/"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Agencia do Trabalhador
    clickAgenciaTrabalhador() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://www3.maringa.pr.gov.br/cdn-imprensa/trabalhoagendamento_ok__.pdf"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Vacinação Covid-19
    clickVacinacaoCovid19() {
        cy.get('#pv_id_2_tabpanel_0 > [href="http://www3.maringa.pr.gov.br/cdn-imprensa/campanhadevacinaca.pdf"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Acesso a informação
    clickAcessoInformacao() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://tributos.maringa.pr.gov.br/portaltransparencia/1/esic"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    //clicar na opção Portal Covid-19
    clickPortalCovid19() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://covid.saude.gov.br"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }
}