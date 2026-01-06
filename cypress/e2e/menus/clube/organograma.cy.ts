import { OrganogramaPage } from '../../../page/menus/clube/OrganogramaPage';
import { MenuClubePage } from '../../../page/menus/clube/MenuClubePage';

describe('menu Organograma', () => {

  const organogramaPage = new OrganogramaPage(); // ✅ cria instância
  const menuClubePage = new MenuClubePage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuClubePage.clickClube();
    menuClubePage.validateOrganograma()
  });

  it('Presidência e Diretoria', () => {
    organogramaPage.clickPresidenciaDiretoria()
    organogramaPage.validatePresidenciaDiretoria()
  });

  it('Conselho Deliberativo', () => {
    organogramaPage.clickConselhoDeliberativo()
    organogramaPage.validateConselhoDeliberativo()
  });

  it('Conselho Fiscal', () => {
    organogramaPage.clickConselhoFiscal()
    organogramaPage.validateConselhoFiscal()
  });

  it('CORI', () => {
    organogramaPage.clickCori()
    organogramaPage.validateCori()
  });
});