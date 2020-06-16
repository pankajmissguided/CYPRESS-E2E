describe('adding new payee to the list',()=>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','webapps')
        cy.get('#signin_button').click()
           cy.fixture('user').then(user =>{
            const username = user.uid
            const password = user.pwd
            cy.login(username,password)
        })
    })
    it('should click on pay Bills',()=>{
        cy.contains('Pay Bills').click()
        cy.contains('Add New Payee').click() 
        cy.get('#np_new_payee_name').type('ABCD')
        cy.get('#np_new_payee_address').type('ABCD  79 canal side walk ol70nu')
        cy.get('#np_new_payee_account').type('12345678')
        cy.get('#np_new_payee_details').type('ABCDFGHIJKLM')
        cy.get('#add_new_payee').click()
    })
    it('should capture message od added payee to the list',()=>{
    cy.get('.span12').should('be.visible').and('contain','The new payee ABCD was successfully created.')
    })
})