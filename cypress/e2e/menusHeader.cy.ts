import { MenusHeaderPage } from '../page/MenusHeaderPage';

describe('Menus Header', () => {

  const menusHeaderPage = new MenusHeaderPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.wait(300)
  });

  it('ACESSO A INFORMAÇÃO', () => {
    menusHeaderPage.clickAcessoInformacao();
  });

  it('CARTA DE SERVIÇOS', () => {
    menusHeaderPage.clickCartaServicos();
  });

  it('INTRANET', () => {
    menusHeaderPage.clickIntranet();
  });

  it('MAPAS E LEIS', () => {
    menusHeaderPage.clickMapasLeis();
  });

  it('OUVIDORIA (156)', () => {
    menusHeaderPage.clickOuvidoria();
  });

  it('PORTAL DO SERVIDOR', () => {
    menusHeaderPage.clickPortalServidor();
  });

  it('RADAR DA TRANSPARÊNCIAA', () => {
    menusHeaderPage.clickRadarTransferencia();
  });
});