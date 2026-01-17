import { CompetitivasPage } from '../../../page/menus/modalidades/CompetitivasPage';
import { MenuModalidadesPage } from '../../../page/menus/modalidades/MenuModalidadesPage';

describe('menu Modalidades -> Associativas', () => {
  const competitivasPage = new CompetitivasPage(); // ✅ cria instância
  const menuModalidadesPage = new MenuModalidadesPage(); // ✅ cria instância

  beforeEach(() => {
    
    cy.visit('/');
    menuModalidadesPage.clickModalidades();
    menuModalidadesPage.validateAssociativas();
  });

  it('Asa Delta', () => {
    
  });

  it('Basquete Masculino', () => {
    
  });

  it('Basquete Feminino', () => {
    
  });

  it('Beach Soccer', () => {
    
  });

  it('Bocha', () => {
    
  });

  it('Boxe', () => {
    
  });

  it('Footgolf', () => {
    
  });

  it('Asa Delta', () => {
    
  });

  it('Basquete Masculino', () => {
    
  });

  it('Basquete Feminino', () => {
    
  });

  it('Beach Soccer', () => {
    
  });

  it('Bocha', () => {
    
  });

  it('Boxe', () => {
    
  });

  it('Footgolf', () => {
    
  });

  it('Asa Delta', () => {
    
  });

  it('Basquete Masculino', () => {
    
  });

  it('Basquete Feminino', () => {
    
  });

  it('Beach Soccer', () => {
    
  });

  it('Bocha', () => {
    
  });

  it('Boxe', () => {
    
  });

  it('Footgolf', () => {
    
  });

  it('Asa Delta', () => {
    
  });

  it('Basquete Masculino', () => {
    
  });

  it('Basquete Feminino', () => {
    
  });

  it('Beach Soccer', () => {
    
  });

  it('Bocha', () => {
    
  });

  it('Boxe', () => {
    
  });

  it('Footgolf', () => {
    
  });

  
});