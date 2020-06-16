describe('currency exchange test ',()=>{
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
    it('should purchage foreign currency',()=>{
        cy.contains('Pay Bills').click()
       cy.contains('Purchase Foreign Currency').click()
       cy.get('#pc_currency').select('GBP')
       cy.get('#pc_amount').type('1000')
       cy.get('#pc_inDollars_true').click()
       cy.get('#pc_calculate_costs').click()
       cy.get('#pc_conversion_amount').should('be.visible').and('contain','1000')
       cy.get('#purchase_cash').click()
            
        })
        it('should display the success msg',()=>{
            cy.get('.span8').should('be.visible').and('contain','Foreign currency cash was successfully purchased.')
        })
})