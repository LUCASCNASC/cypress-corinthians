import { MenuSecretariasPage } from '../page/MenuSecretariasPage';

describe('menus Secretarias', () => {

  const menuSecretariasPage = new MenuSecretariasPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuSecretariasPage.clickSecretarias(); // ✅ usa o método da instância
  });

  it('Secretarias -> Prefeitos', () => {
    menuSecretariasPage.clickPrefeitos(); // ✅ usa o método da instância
  });

  it('Secretarias -> Estrutura Organizacional / Organograma (abrir uma nova aba)', () => {
    menuSecretariasPage.clickEstruturaOrganizacional(); // ✅ usa o método da instância
  });

  it.only('Secretarias -> Secretarias -> Gabinete do Prefeito', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
  });

  
});
