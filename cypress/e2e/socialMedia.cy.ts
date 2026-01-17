import { SocialMediaPage } from '../page/SocialMediaPage';

describe('Social Media', () => {
  const socialMediaPage = new SocialMediaPage(); // ✅ cria instância

  beforeEach(() => {

    cy.visit('/');
  });

  it('linkedin', () => {
    
    socialMediaPage.clickLinkedin()
  });

  it('instagram', () => {

    socialMediaPage.clickInstagram()
  });

  it('x', () => {

    socialMediaPage.clickX()
  });

  it('facebook', () => {

    socialMediaPage.clickFacebook()
  });

  it('youtube', () => {

    socialMediaPage.clickYoutube()
  });

  it('tiktok', () => {

    socialMediaPage.clickTikTok()
  });

  it('whatsapp', () => {

    socialMediaPage.clickWhatsapp()
  });
});