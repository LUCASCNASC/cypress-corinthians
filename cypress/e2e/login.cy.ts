//import { CidadaoPage } from '../page/LoginPage';

describe('login', () => {

  //const cidadaoPage = new CidadaoPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.closeNewsletter()
    
  });

  it('login sucess', () => {

    cy.get('.hidden.justify-end > #loginNavigation > .gap-4 > :nth-child(2)').click()
    
  });

});