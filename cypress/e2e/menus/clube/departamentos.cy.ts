import { DepartamentosPage } from '../../../page/menus/clube/DepartamentosPage';
import { MenuClubePage } from '../../../page/menus/clube/MenuClubePage';

describe('menu Departamentos', () => {
  const departamentosPage = new DepartamentosPage(); // ✅ cria instância
  const menuClubePage = new MenuClubePage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
    menuClubePage.clickClube();
    menuClubePage.validateDepartamentos();
  });

  it('Departamento Cultura', () => {

    departamentosPage.clickDepartamentoCultural();
    departamentosPage.validateDepartamentoCultural();
  });

  it('Apoio Cultural', () => {

    departamentosPage.clickApoioCultural();
    departamentosPage.validateApoioCultural();
  });

  it('Responsabilidade Social', () => {

    departamentosPage.clickResponsabilidadeSocial();
    departamentosPage.validateResponsabilidadeSocial();
  });

  it('Departamento Médico', () => {
    
    departamentosPage.clickDepartamentoMedico();
    departamentosPage.validateDepartamentoMedico();
  });

  it('Departamento Social', () => {

    departamentosPage.clickDepartamentoSocial();
    departamentosPage.validateDepartamentoSocial();
  });

  it('Esportes Aquáticos', () => {

    departamentosPage.clickEsportesAquaticos();
    departamentosPage.validateEsportesAquaticos();
  });

  it('Esportes Terrestres', () => {

    departamentosPage.clickEsportesTerrestres();
    departamentosPage.validateEsportesTerrestres();
  });
});