import { CompetitivasPage } from '../../../page/menus/modalidades/CompetitivasPage';
import { MenuModalidadesPage } from '../../../page/menus/modalidades/MenuModalidadesPage';

describe('menu Modalidades -> Competivivas', () => {
  const competitivasPage = new CompetitivasPage(); // ✅ cria instância
  const menuModalidadesPage = new MenuModalidadesPage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuModalidadesPage.clickModalidades();
    menuModalidadesPage.validateCompetitivas();
  });

  it('Asa Delta', () => {

    competitivasPage.clickAsaDelta();
    competitivasPage.validateAsaDelta();
  });

  it('Basquete Masculino', () => {
    
    competitivasPage.clickBasqueteMasculino();
    competitivasPage.validateBasqueteMasculino();
  });

  it('Basquete Feminino', () => {

    competitivasPage.clickBasqueteFeminino();
    competitivasPage.validateBasqueteFeminino();
  });

  it('Beach Soccer', () => {

    competitivasPage.clickBeachSoccer();
    competitivasPage.validateBeachSoccer();
  });

  it('Bocha', () => {

    competitivasPage.clickBocha();
    competitivasPage.validateBocha();
  });

  it('Boxe', () => {

    competitivasPage.clickBoxe();
    competitivasPage.validateBoxe();
  });

  it('Footgolf', () => {

    competitivasPage.clickFootgolf();
    competitivasPage.validateFootgolf();
  });

  it('Futebol Americano', () => {

    competitivasPage.clickFutebolAmericano();
    competitivasPage.validateFutebolAmericano();
  });

  it('Futebol Sociaty', () => {

    competitivasPage.clickFutebolSociety();
    competitivasPage.validateFutebolSociety();
  });

  it('Futsal', () => {

    competitivasPage.clickFutsal();
    competitivasPage.validateFutsal();
  });

  it('Futsal Feminino Tiger', () => {

    competitivasPage.clickFutsalFemininoTiger();
    competitivasPage.validateFutsalFemininoTiger();
  });

  it('Handebol', () => {

    competitivasPage.clickHandebol();
    competitivasPage.validateHandebol();
  });

  it('MMA', () => {

    competitivasPage.clickMMA();
    competitivasPage.validateMMA();
  });

  it('Natação', () => {

    competitivasPage.clickNatacao();
    competitivasPage.validateNatacao();
  });

  it('Rally', () => {

    competitivasPage.clickRally();
    competitivasPage.validateRally();
  });

  it('Remo', () => {

    competitivasPage.clickRemo();
    competitivasPage.validateRemo();
  });

  it('Skate', () => {

    competitivasPage.clickSkate();
    competitivasPage.validateSkate();
  });

  it('Surf', () => {

    competitivasPage.clickSurf();
    competitivasPage.validateSurf();
  });

  it('Vôlei', () => {

    competitivasPage.clickVolei();
    competitivasPage.validateVolei();
  });

  it('Xadrez', () => {

    competitivasPage.clickXadrez();
    competitivasPage.validateXadrez();
  });
});