describe('Landing Page', () => {
    it('Goes to main client portal', () => {
      cy.visit('https://www.relias.com/clients');
      cy.contains('Relias Client Login').should('be.visible')
    })

})