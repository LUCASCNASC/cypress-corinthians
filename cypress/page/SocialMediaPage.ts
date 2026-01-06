export class SocialMediaPage {

    //clicar em Linkedin
    clickLinkedin() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(1) > a > .linkedin-icon').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar em Instagram
    clickInstagram() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(2) > a > .instagram-icon > .sepia').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar em X (Twitter)
    clickX() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(3) > a > .twitter-icon > .sepia').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar em Facebook
    clickFacebook() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(4) > a > .facebook-icon > .sepia').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar em Youtube
    clickYoutube() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(5) > a > .youtube-icon > .sepia').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar em TikTok
    clickTikTok() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(6) > a > .sepia').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    }

    //clicar em Whatsapp
    clickWhatsapp() {
        cy.get('.li-redes-sociais > .ct-navigation-social > :nth-child(7) > a > img').click()
        cy.window().then((win) => { cy.stub(win, 'open').as('windowOpen') })
        cy.url().should('include', 'https://www.corinthians.com.br/')
    } 
}