import { FaleConoscoPage } from '../../../page/menus/clube/FaleConoscoPage';
import { MenuClubePage } from '../../../page/menus/clube/MenuClubePage';

describe('menu Fale Conosco', () => {
  const faleConoscoPage = new FaleConoscoPage(); // ✅ cria instância
  const menuClubePage = new MenuClubePage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuClubePage.clickClube();
    menuClubePage.validateFaleConosco();
  });

  it('Contatos', () => {

    faleConoscoPage.clickContatos();
    faleConoscoPage.validateContatos();
  });

  it('Ouvidoria', () => {

    faleConoscoPage.clickOuvidoria();
    faleConoscoPage.validateOuvidoria();
  });
});