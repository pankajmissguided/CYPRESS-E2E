describe('Navbar test',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('myitem',{log: true})
        cy.url().should('include','webapp')
        cy.title().should('include','Zero - Personal Banking - Loans - Credit Cards')
    })
    it('should click on the Online banking',()=>{
         cy.get('#onlineBankingMenu').click()
         cy.get('h1').should('contain','Online Banking')
    })
    it('should click on the Feedback link',()=>{
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3').should('contain','Feedback')
    })
    it('should validate the home page',()=>{
        cy.get('.brand').click()
        cy.url().should('include','index.html')
    })
})