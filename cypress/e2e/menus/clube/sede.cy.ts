import { SedePage } from '../../../page/menus/clube/SedePage';
import { MenuClubePage } from '../../../page/menus/clube/MenuClubePage';

describe('menu Sede', () => {

  const sedePage = new SedePage(); // ✅ cria instância
  const menuClubePage = new MenuClubePage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuClubePage.clickClube();
    menuClubePage.validateSede();
  });

  it('Sede Social', () => {
    sedePage.clickSedeSocial();
    sedePage.validateSedeSocial();
  });

  it('Visitas', () => {
    sedePage.clickVisitas();
    sedePage.validateVisitas();
  });

  it('Memorial Corinthians', () => {
    sedePage.clickMemorialCorinthians();
    sedePage.validateMemorialCorinthians();
  });

  it('Teatro Corinthians', () => {
    sedePage.clickTeatroCorinthians();
    sedePage.validateTeatroCorinthians();
  });

  it('Salão Nobre', () => {
    sedePage.clickSalaoNobre();
    sedePage.validateSalaoNobre();
  });


  it('Coworking', () => {
    sedePage.clickCoworking();
    sedePage.validateCoworking();
  });

  it('Espaço Kids', () => {
    sedePage.clickEspacoKids();
    sedePage.validateEspacoKids();
  });

  it('Skate Park', () => {
    sedePage.clickSkateParks();
    sedePage.validateSkatePark();
  });

  it('Fiel Móvel', () => {
    sedePage.clickFielMovel();
    sedePage.validateFielMovel();
  });

  it('Seja Sócio', () => {
    sedePage.clickSejaSocio();
    sedePage.validateSejaSocio();
  });

  it('Portal do Associado', () => {
    sedePage.clickPortalAssociado();
    sedePage.validatePortalAssociado();
  });
});