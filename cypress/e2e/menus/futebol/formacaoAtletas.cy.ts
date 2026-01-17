import { FormacaoAtletasPage } from '../../../page/menus/futebol/FormacaoAtletasPage';
import { MenuFutebolPage } from '../../../page/menus/futebol/MenuFutebolPage';

describe('menu futebol feminino', () => {
  const formacaoAtletasPage = new FormacaoAtletasPage(); // ✅ cria instância
  const menuFutebolPage = new MenuFutebolPage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuFutebolPage.clickFutebol();
    menuFutebolPage.validateFormacaoAtletas();
  });

  it('Sub-20', () => {

    formacaoAtletasPage.clickSub20();
    formacaoAtletasPage.validateSub20();
  });

  it('Estrutura', () => {

    formacaoAtletasPage.clickEstrutura();
    formacaoAtletasPage.validateEstrutura();
  });

  it('Calendário de Jogos', () => {

    formacaoAtletasPage.clickCalendarioJogos();
    formacaoAtletasPage.validateCalendarioJogos();
  });

  it('Dept. de Formação de Atletas', () => {

    formacaoAtletasPage.clickDeptFormaçãoAtletas();
    formacaoAtletasPage.validateDeptFormaçãoAtletas();
  });

  it('Peneiras 2024', () => {
    
    formacaoAtletasPage.clickPeneiras();
    formacaoAtletasPage.validatePeneiras();
  });
});