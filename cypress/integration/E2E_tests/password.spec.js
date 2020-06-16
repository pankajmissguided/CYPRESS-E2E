describe('forgot password',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('myitem',{log: true})
        cy.url().should('include','webapp')
        cy.title().should('include','Zero - Personal Banking - Loans - Credit Cards')
    })
    it('should click on the Sign In button',()=>{
        cy.get('#signin_button').click()
       
    })
    it('should click on the forgot password link',()=>{
        cy.get('.offset3 > a').click()
        //TODO
    })
    it('should enter email id',()=>{
        cy.get('#user_email').type('ABCD@gmail.com')
    })
    it('click on the submit button',()=>{
        cy.get('.btn-primary').click()
    })
    it('should validate the email',()=>{
        cy.get('.span6').should('contain','Your password will be sent to the following email: ABCD@gmail.com')
    })
})