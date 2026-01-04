//commando to wait appear newsletter and close.
Cypress.Commands.add('closeNewsletter', () => {

    cy.intercept('GET','**/out/v1/s-prd/ch-01-prd-s-v2/dash-ch-01-prd-s-hd/**').as('api_video_stream');
    cy.wait('@api_video_stream', { timeout: 40000 });

    cy.get('.absolute > .inline-flex').click()
    
})