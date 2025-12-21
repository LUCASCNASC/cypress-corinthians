import { MenuPortaisPage } from '../page/MenuPortaisPage';

describe('menus Portais', () => {

  const menuPortaisPage = new MenuPortaisPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuPortaisPage.clickPortais(); // ✅ usa o método da instância
  });

  it.only('Portais -> Aceleração Econômica e Turismo', () => {
    menuPortaisPage.clickAceleracaoEconomicaTurismo(); // ✅ usa o método da instância
  });

  it('Portais -> AFMM', () => {
    menuPortaisPage.clickAFMM(); // ✅ usa o método da instância
  });

  it('Portais -> Agência Maringá de Tecnologia e Inovação', () => {
    menuPortaisPage.clickAgenciaMaringaTecnologiaInovacao(); // ✅ usa o método da instância
  });

  it('Portais -> Assistência Social, Políticas sobre as Drogas e Pessoa Idosa', () => {
    menuPortaisPage.clickAssistenciaSocialPoliticasDrogasPessoaIdosa(); // ✅ usa o método da instância
  });

  it('Portais -> Compliance e Controle', () => {
    menuPortaisPage.clickComplianceControle(); // ✅ usa o método da instância
  });

  it('Portais -> Criança e Adolescente', () => {
    menuPortaisPage.clickCriancaAdolescente(); // ✅ usa o método da instância
  });

  it('Portais -> Cultura', () => {
    menuPortaisPage.clickCultura(); // ✅ usa o método da instância
  });

  it('Portais -> Educação', () => {
    menuPortaisPage.clickEducacao(); // ✅ usa o método da instância
  });

  it('Portais -> Esporte e Lazer', () => {
    menuPortaisPage.clickEsporteLazer(); // ✅ usa o método da instância
  });

  it('Portais -> Fazenda', () => {
    menuPortaisPage.clickFazenda(); // ✅ usa o método da instância
  });

  it('Portais -> Gestão de Pessoas', () => {
    menuPortaisPage.clickGestaoDePessoas(); // ✅ usa o método da instância
  });

  it('Portais -> Infraestrutura', () => {
    menuPortaisPage.clickInfraestrutura(); // ✅ usa o método da instância
  });

  it('Portais -> Instituto Ambiental de Maringá (IAM)', () => {
    menuPortaisPage.clickInstitutoAmbientalMaringa(); // ✅ usa o método da instância
  });
  
  it('Portais -> Instituto de Pesquisa e Planejamento Urbano de Maringá (IPPLAM)', () => {
    menuPortaisPage.clickInstitutoPesquisaPlanejamentoUrbanoMaringa(); // ✅ usa o método da instância
  });

  it('Portais -> Juventude, Cidadania e Migrantes', () => {
    menuPortaisPage.clickJuventudeCidadaniaMigrantes(); // ✅ usa o método da instância
  });

  it('Portais -> Logística e Compras', () => {
    menuPortaisPage.clickLogisticaCompras(); // ✅ usa o método da instância
  });

  it('Portais -> Maringá Previdência', () => {
    menuPortaisPage.clickMaringaPrevidencia(); // ✅ usa o método da instância
  });

  it('Portais -> Mobilidade Urbana', () => {
    menuPortaisPage.clickMobilidadeUrbana(); // ✅ usa o método da instância
  });

  it('Portais -> Mulher', () => {
    menuPortaisPage.clickMulher(); // ✅ usa o método da instância
  });

  it('Portais -> Obras públicas', () => {
    menuPortaisPage.clickObrasPublicas(); // ✅ usa o método da instância
  });

  it('Portais -> Procon', () => {
    menuPortaisPage.clickProcon(); // ✅ usa o método da instância
  });

  it('Portais -> Procuradoria-geral', () => {
    menuPortaisPage.clickProcuradoriaGeral(); // ✅ usa o método da instância
  });

  it('Portais -> Saúde', () => {
    menuPortaisPage.clickSaude(); // ✅ usa o método da instância
  });

  it('Portais -> Segurança', () => {
    menuPortaisPage.clickSeguranca(); // ✅ usa o método da instância
  });

  it('Portais -> Turismo Maringá', () => {
    menuPortaisPage.clickTurismoMaringa(); // ✅ usa o método da instância
  });

  it('Portais -> Urbanismo e Habitação', () => {
    menuPortaisPage.clickUrbanismoHabitação(); // ✅ usa o método da instância
  });

  
});
