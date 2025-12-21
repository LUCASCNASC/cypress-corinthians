import { MenuACidadePage } from '../page/MenuACidadePage';

describe('menus A Cidade', () => {

  const menuACidadePage = new MenuACidadePage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuACidadePage.clickACidade(); // ✅ usa o método da instância
  });

  it('A Cidade -> Bandeira', () => {
    menuACidadePage.clickBandeira(); // ✅ usa o método da instância
  });

  it('A Cidade -> Brasão', () => {
    menuACidadePage.clickBrasao(); // ✅ usa o método da instância
  });

  it('A Cidade -> Cadastur', () => {
    menuACidadePage.clickCadastur(); // ✅ usa o método da instância
  });

  it('A Cidade -> Demografia', () => {
    menuACidadePage.clickDemografia(); // ✅ usa o método da instância
  });

  it('A Cidade -> Embarque/Desembarque Rodoviária', () => {
    menuACidadePage.clickEmbarqueDesembarqueRodoviaria(); // ✅ usa o método da instância
  });

  it('A Cidade -> Galeria de Arte', () => {
    menuACidadePage.clickGaleriaDeArte(); // ✅ usa o método da instância
  });

  it('A Cidade -> Hino', () => {
    menuACidadePage.clickHino(); // ✅ usa o método da instância
  });

  it('A Cidade -> Histórico do Município', () => {
    menuACidadePage.clickHistoricoDoMunicipio(); // ✅ usa o método da instância
  });

  it('A Cidade -> Maringá - Cidade Canção 🎵', () => {
    menuACidadePage.clickMaringaCidadeCancao(); // ✅ usa o método da instância
  });

  it('A Cidade -> Maringá em Rotas', () => {
    menuACidadePage.clickMaringaEmRotas(); // ✅ usa o método da instância
  });

  it('A Cidade -> Nossa Cidade', () => {
    menuACidadePage.clickNossaCidade(); // ✅ usa o método da instância
  });

  it('A Cidade -> Plano Municipal de Turismo 2023/2033', () => {
    menuACidadePage.clickPlanoMunicipalDeTurismo(); // ✅ usa o método da instância
  });

});
