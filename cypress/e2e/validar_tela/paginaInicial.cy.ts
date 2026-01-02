import { RedesSociaisPage } from '../../page/RedesSociaisPage';

describe('Redes Sociais', () => {

  const redesSociaisPage = new RedesSociaisPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('FACEBOOK', () => {

    //botões iniciais
    cy.get('[data-test="languageImg"]').should("be.visible")
    cy.get('[data-test="darkmode"]').should("be.visible")
    cy.get('[data-test="increaseZoom"]').should("be.visible")
    cy.get('[data-test="decreaseZoom"]').should("be.visible")
    cy.get('[data-test="resetZoom"]').should("be.visible")
    cy.get('[data-test="help"]').should("be.visible")
    cy.get('[data-test="vlibras"]').should("be.visible")
    cy.get('[data-test="sitemap"]').should("be.visible")

    //botões no header
    cy.contains("ACESSO À INFORMAÇÃO").should("be.visible")
    cy.contains("CARTA DE SERVIÇOS").should("be.visible")
    cy.contains("INTRANET").should("be.visible")
    cy.contains("MAPAS E LEIS").should("be.visible")
    cy.contains("OUVIDORIA (156)").should("be.visible")
    cy.contains("PORTAL DO SERVIDOR").should("be.visible")
    cy.contains("RADAR DA TRANSPARÊNCIA").should("be.visible")

    //campo Pesquisar
    cy.get('[data-test="search-input"]').should("be.visible")

    //Prefeitura de Maringá
    cy.get('.self-start').should("be.visible")

    //menus
    cy.get('#pv_id_1_0 > .p-menubar-item-content > [data-test="menu-item"]').should("be.visible")
    cy.get('#pv_id_1_1 > :nth-child(1) > .p-menubar-item-link').should("be.visible")
    cy.get('#pv_id_1_2 > :nth-child(1) > .p-menubar-item-link').should("be.visible")
    cy.get('#pv_id_1_3 > :nth-child(1) > .p-menubar-item-link').should("be.visible")
    cy.get('#pv_id_1_4 > :nth-child(1) > .p-menubar-item-link').should("be.visible")
    cy.get('#pv_id_1_5 > :nth-child(1) > .p-menubar-item-link').should("be.visible")
    cy.get('#pv_id_1_6 > .p-menubar-item-content > .p-menubar-item-link').should("be.visible")
    cy.get('#pv_id_1_7 > .p-menubar-item-content > .p-menubar-item-link').should("be.visible")

    //acesso rapido Cidadão
    cy.get('[href="https://storage.maringa.pr.gov.br/1/61e19a2a-c2e7-4235-82e3-5a04a98389a0.pdf"] > .text-sm').should("be.visible")
    cy.get('[href="https://sisweb.maringa.pr.gov.br/residmed-2026/index.php"] > .text-sm').should("be.visible")
    cy.get('[href="https://main.institutounifil.com.br/concurso/169"] > .text-sm').should("be.visible")
    cy.get('[href="https://sisweb.maringa.pr.gov.br/psssaude2025/"] > .text-sm').should("be.visible")
    cy.get('[href="https://sisweb.maringa.pr.gov.br/psssaude2025/"] > .text-sm').should("be.visible")
    cy.get('[href="https://storage.maringa.pr.gov.br/1/271d7318-1b07-4a1c-8514-ce726463cc77.pdf"] > .text-sm').should("be.visible")
    cy.get('[href="https://leismunicipais.com.br/prefeitura/pr/maringa"] > .text-sm').should("be.visible")
    cy.get('[href="http://sisweb.maringa.pr.gov.br:81/rhInscricaoEstagiarios/inscricao/index"] > .text-sm').should("be.visible")
    cy.get('[href="https://www.maringa.pr.gov.br/carta-servico"] > .text-sm').should("be.visible")
    cy.get('[href="https://webpmm.maringa.pr.gov.br/portal-do-sei/home/peticionamento"] > .text-sm').should("be.visible")
    cy.get('[href="http://sisweb.maringa.pr.gov.br:8090/PasseEstudante/"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/site/index.php?sessao=30e927f10f8130"] > .text-sm').should("be.visible")
    cy.get('[href="https://orgao-oficial.maringa.pr.gov.br"] > .text-sm').should("be.visible")
    cy.get('[href="https://cidadao.maringa.pr.gov.br/portal-contribuinte/"] > .text-sm').should("be.visible")
    cy.get('[href="https://cidadao.maringa.pr.gov.br/portal-contribuinte/inicio"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/portal/?cod=portal/21/revisaoplanodiretor"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/faq/lgpd/"] > .text-sm').should("be.visible")
    cy.get('[href="https://www.maringa.pr.gov.br/maringacompra/"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/notificasaude/"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/saude/"] > .text-sm').should("be.visible")
    cy.get('[href="http://www.maringa.pr.gov.br/saladoempreendedor/"] > .text-sm').should("be.visible")
    cy.get('[href="https://www3.maringa.pr.gov.br/cdn-imprensa/trabalhoagendamento_ok__.pdf"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/cdn-imprensa/campanhadevacinaca.pdf"] > .text-sm').should("be.visible")
    cy.get('[href="https://tributos.maringa.pr.gov.br/portaltransparencia/1/esic"] > .text-sm').should("be.visible")
    cy.get('[href="https://covid.saude.gov.br"] > .text-sm').should("be.visible")

    //acesso rapido Servidor
    cy.get('#pv_id_2_tab_1').click()

    cy.get('[href="https://maringa.oxy.elotech.com.br"] > .text-sm').should("be.visible")
    cy.get('[href="http://www3.maringa.pr.gov.br/ouvidoria-do-servidor/"] > .text-sm').should("be.visible")
    cy.get('[href="https://sisrh.maringa.pr.gov.br:9597/portaldoservidor/portal/login"] > .text-sm').should("be.visible")
    cy.get('[href="https://sisrh.maringa.pr.gov.br:9597/portaldoestagiario/portal/login"] > .text-sm').should("be.visible")

    //acesso rapido Empresa
    cy.get('#pv_id_2_tab_2').click()

    cy.get('[href="http://www3.maringa.pr.gov.br/conferencia/?cod=simpoa"] > .text-sm').should("be.visible")
    cy.get('[href="https://maringa.fintel.com.br/"] > .text-sm').should("be.visible")

    //agendas
    cy.get(':nth-child(1) > .rounded-l-sm').should("be.visible") //cultural
    cy.get(':nth-child(3) > .rounded-l-sm').should("be.visible") //datas comemorativas
    cy.get(':nth-child(5) > .rounded-l-sm').should("be.visible") //eventos
    cy.get(':nth-child(7) > .rounded-l-sm').should("be.visible") //pontos facultativos
    cy.get(':nth-child(2) > .rounded-l-sm').should("be.visible") //cursos da saúde
    cy.get(':nth-child(4) > .rounded-l-sm').should("be.visible") //esportiva
    cy.get(':nth-child(6) > .rounded-l-sm').should("be.visible") //feriados
    cy.get(':nth-child(8) > .rounded-l-sm').should("be.visible") //prefeito

    //redes sociais
    //facebook
    cy.get(':nth-child(1) > :nth-child(1) > .flex > img').should("be.visible")
    cy.get(':nth-child(1) > .flex > .text-lg').should("be.visible")
    cy.get(':nth-child(5) > .container > :nth-child(1) > :nth-child(1) > .flex').should("be.visible")

    //instagram
    cy.get('.container > :nth-child(1) > :nth-child(2) > .flex > img').should("be.visible")
    cy.get(':nth-child(2) > .flex > .text-lg').should("be.visible")
    cy.get(':nth-child(5) > .container > :nth-child(1) > :nth-child(2) > .flex').should("be.visible")

    //tiktok
    cy.get(':nth-child(3) > .flex > img').should("be.visible")
    cy.get(':nth-child(3) > .flex > .text-lg').should("be.visible")
    cy.get(':nth-child(1) > :nth-child(3) > .flex').should("be.visible")

    //x
    cy.get('.container > :nth-child(1) > :nth-child(4) > .flex > img').should("be.visible")
    cy.get('.container > :nth-child(1) > :nth-child(4) > .flex > .text-lg').should("be.visible")
    cy.get('.container > :nth-child(1) > :nth-child(4) > .flex').should("be.visible")

    //youtube
    cy.get(':nth-child(5) > .flex > img').should("be.visible")
    cy.get(':nth-child(5) > .flex > .text-lg').should("be.visible")
    cy.get(':nth-child(1) > :nth-child(5) > .flex').should("be.visible")

  });

});