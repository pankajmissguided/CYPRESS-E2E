describe('Add Payment',()=>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include','webapps')
        cy.contains('Signin').click()
        cy.fixture('user').then(user=>{
            const username = user.uid
            const password = user.pwd 
            cy.login(username,password)
        })
    })
    it('Add payments details',()=>{
    cy.contains('Pay Bills').click()
   
    cy.contains('Pay Saved Payee').click()
    cy.get('#sp_payee').select('Wells Fargo')
    cy.get('#sp_account').select('Credit Card')
    cy.get('#sp_amount').type('2000')
    cy.get('#sp_date').type('2020-06-27 {enter}')
    cy.get('#sp_description').type('Adding new payment')
    cy.get('#pay_saved_payees').click()
        
    })
    it('should show success msg',()=>{
        cy.get('.span8')
        .should('be.visible')
        .and('contain','The payment was successfully submitted.')
    })
})