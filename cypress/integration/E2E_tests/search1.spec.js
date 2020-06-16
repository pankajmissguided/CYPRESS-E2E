describe('serach tet box',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('validate the correct url url',()=>{
        cy.url().should('include','webapp')
        cy.title().should('include','Zero - Personal Banking - Loans - Credit Cards')
    })
    it('able to enter serch text',()=>{
        cy.get('#searchTerm').type('ABCD {enter}')
    })
    it('validate the serach result page',()=>{
        cy.get('.top_offset').should('contain','No results were found for the query: ABCD')
    })
})