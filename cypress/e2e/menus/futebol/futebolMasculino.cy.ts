import { FutebolMasculinoPage } from '../../../page/menus/futebol/FutebolMasculinoPage';
import { MenuFutebolPage } from '../../../page/menus/futebol/MenuFutebolPage';

describe('menu futebol masculino', () => {
  const futebolMasculinoPage = new FutebolMasculinoPage(); // ✅ cria instância
  const menuFutebolPage = new MenuFutebolPage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuFutebolPage.clickFutebol();
    menuFutebolPage.validateFutebolMasculino();
  });

  it.skip('Elenco', () => {

    futebolMasculinoPage.clickElenco();
    futebolMasculinoPage.validateElenco();
  });

  it('Estrutura', () => {

    futebolMasculinoPage.clickEstrutura();
    futebolMasculinoPage.validateEstrutura();
  });

  it('Depto. de Futebol Profissional', () => {
    
    futebolMasculinoPage.clickDeptoFutebolProfissional();
    futebolMasculinoPage.validateDeptoFutebolProfissional();
  });

  it('Notícias', () => {

    futebolMasculinoPage.clickNoticias();
    futebolMasculinoPage.validateNoticias();
  });
});