export class LoginPage {

    //clicar no menu Cidadão
    clickCidadao() {
        cy.get('#pv_id_2_tab_0').click();
    }

    //clicar na opção Farmácia Móvel
    clickFarmaciaMovel() {
        cy.get('#pv_id_2_tabpanel_0 > [href="https://storage.maringa.pr.gov.br/1/61e19a2a-c2e7-4235-82e3-5a04a98389a0.pdf"]').click();
        cy.url().should('include', 'https://www.maringa.pr.gov.br/');
    }

    

    
}