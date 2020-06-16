describe('Submiting feedback form',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('myitem',{log: true})
        cy.url().should('include','webapps')
        cy.title().should('include','Zero - Personal Banking - Loans - Credit Cards')
    })
    it('click on the feedback',()=>{
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.title().should('include','Zero - Contact Us')
        cy.get('form').should('be.visible')
    })
    it('should fill in the form',()=>{
        cy.get('#name').type('Rohan')
        cy.get('#email').type('Rohan@example.com')
        cy.get('#subject').type('tranaction proce')
        cy.get('#comment').type('This is my first Comment')
        cy.get('.btn-signin').click()
    })
    it('should validate successful submission of Feedback form',()=>{
        cy.get('.offset3').should('contain','Thank you for your comments')
        cy.url().should('include','sendFeedback.html')
    })
})