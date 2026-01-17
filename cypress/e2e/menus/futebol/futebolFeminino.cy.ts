import { FutebolFemininoPage } from '../../../page/menus/futebol/FutebolFemininoPage';
import { MenuFutebolPage } from '../../../page/menus/futebol/MenuFutebolPage';

describe('menu futebol feminino', () => {
  const futebolFemininoPage = new FutebolFemininoPage(); // ✅ cria instância
  const menuFutebolPage = new MenuFutebolPage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuFutebolPage.clickFutebol();
    menuFutebolPage.validateFutebolFeminino();
  });

  it.skip('Elenco', () => {

    futebolFemininoPage.clickElenco();
    futebolFemininoPage.validateElenco();
  });

  it('Estrutura', () => {

    futebolFemininoPage.clickEstrutura();
    futebolFemininoPage.validateEstrutura();
  });

  it('Calendário de Jogos', () => {

    futebolFemininoPage.clickCalendarioJogos();
    futebolFemininoPage.validateCalendarioJogos();
  });

  it('Notícias', () => {
    
    futebolFemininoPage.clickNoticias();
    futebolFemininoPage.validateNoticias();
  });
});