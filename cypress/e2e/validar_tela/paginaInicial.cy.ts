import { RedesSociaisPage } from '../../page/RedesSociaisPage';

describe('Redes Sociais', () => {

  const redesSociaisPage = new RedesSociaisPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('FACEBOOK', () => {
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
  });
});