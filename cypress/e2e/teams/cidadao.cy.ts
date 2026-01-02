import { CidadaoPage } from '../../page/acesso_rapido/TeamsPage';

describe('acesso rápido Cidadão', () => {

  const cidadaoPage = new CidadaoPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cidadaoPage.clickCidadao(); // ✅ usa o método da instância
  });

  it('Farmácia Móvel', () => {
    cidadaoPage.clickFarmaciaMovel();
  });

  it('Resid. Médica Edital ...', () => {
    cidadaoPage.clickResidMedicaEdital();
  });

  it('PSS Educação 2025', () => {
    cidadaoPage.clickPSSEducacao();
  });

  it('PSS Saúde 2025', () => {
    cidadaoPage.clickPSSSaude();
  });

  it('Agencia Previsão de Pagamento', () => {
    cidadaoPage.clickAgendaPrevisaoPagamento();
  });

  it('Vacinação', () => {
    cidadaoPage.clickVacinacao();
  });

  it('leis do Município', () => {
    cidadaoPage.clickLeisMunicipio();
  });

  it('Estágio', () => {
    cidadaoPage.clickEstagio();
  });

  it('Carta de Serviços', () => {
    cidadaoPage.clickCartaServicos();
  });

  it('SEI', () => {
    cidadaoPage.clickSEI();
  });

  it('Passe do Estudante', () => {
    cidadaoPage.clickPasseEstudante();
  });

  it('Consulta Consursos', () => {
    cidadaoPage.clickConsultaConcursos();
  });

  it('Diário Oficial', () => {
    cidadaoPage.clickDiarioOficial();
  });

  it('EMISSÃO DE GUIAS/BOLETOS', () => {
    cidadaoPage.clickEmissaoGuiasBoletos();
  });

  it('Emissão de Certidões', () => {
    cidadaoPage.clickEmissaoCertidoes();
  });

  it('Plano Diretor', () => {
    cidadaoPage.clickPlanoDiretor();
  });

  it('FAQ - LGPD', () => {
    cidadaoPage.clickFaqLGPD();
  });

  it('Portal Maringá compra', () => {
    cidadaoPage.clickPortalMaringaCompra();
  });

  it('Notifica Saúde', () => {
    cidadaoPage.clickNotificaSaude();
  });

  it('Portal Saúde Maringá', () => {
    cidadaoPage.clickPortalSaudeMaringa();
  });

  it('Sala digital do microempreendedor', () => {
    cidadaoPage.clickSalaDigitalMicroempreendedor();
  });

  it('Agencia do Trabalhador', () => {
    cidadaoPage.clickAgenciaTrabalhador();
  });

  it('Vacinação Covid-19', () => {
    cidadaoPage.clickVacinacaoCovid19();
  });

  it('Acesso a informação', () => {
    cidadaoPage.clickAcessoInformacao();
  });

  it('Portal Covid-19', () => {
    cidadaoPage.clickPortalCovid19();
  });
});