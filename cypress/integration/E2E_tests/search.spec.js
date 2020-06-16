describe('test search',()=>{
    before(function(){
    
        cy.visit('http://zero.webappsecurity.com/')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('myitem',{log: true})
    })
    it('chould validate that loaded correct url',()=>{
        cy.url().should('include','webapp')
        cy.title().should('include','Zero - Personal Banking - Loans - Credit Cards')
    })
    it('should serch for word ABCD',()=>{
        cy.get('#searchTerm').type('ABCD {enter}')
    })
    it('should verify the earch term',()=>{
        cy.get('.top_offset').should('contain','No results were found for the query: ABCD')
    })
})
