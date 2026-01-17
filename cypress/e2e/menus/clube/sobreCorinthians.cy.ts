import { SobreCorinthiansPage } from '../../../page/menus/clube/SobreCorinthiansPage';
import { MenuClubePage } from '../../../page/menus/clube//MenuClubePage';

describe('menu Sobre o Corinthians', () => {
  const sobreCorinthiansPage = new SobreCorinthiansPage(); // ✅ cria instância
  const menuClubePage = new MenuClubePage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuClubePage.clickClube();
    menuClubePage.validateSobreCorinthians();
  });

  it('História', () => {

    sobreCorinthiansPage.clickHistoria();
    sobreCorinthiansPage.validateHistoria();
  });

  it('Títulos', () => {

    sobreCorinthiansPage.clickTitulos();
    sobreCorinthiansPage.validateTitulos();
  });

  it('Identidade', () => {

    sobreCorinthiansPage.clickIdentidade();
    sobreCorinthiansPage.validateIdentidade();
  });
});