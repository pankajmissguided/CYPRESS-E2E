describe('adding new payee',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include','webapps')
        cy.contains('Signin').click()
        cy.fixture('user').then(user=>{
            const username = user.uid
            const password = user.pwd 
            cy.login(username,password)
        })
    })
    it('Enter new details',()=>{
        //TODO
    })

})