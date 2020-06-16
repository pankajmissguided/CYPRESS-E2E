describe('Transfer funds verification',()=>{
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
    it('should fills transfer funds',()=>{
        cy.contains('Transfer Funds').click()
       cy.get('#tf_fromAccountId').select('2')
       cy.get('#tf_toAccountId').select('4')
       cy.get('#tf_amount').type('1000')
       cy.get('#tf_description').type('enter description')
       cy.get('#btn_submit').click()
       
            
        })
        it('should verify success msbg',()=>{
            cy.get('h2').should('be.visible').and('contain','Transfer Money & Make Payments - Verify')
            cy.get('#tf_fromAccountId').should('have.value','Checking')
            cy.get('#tf_toAccountId').should('have.value','Loan')
            cy.get('#tf_amount').should('have.value','1000')
            cy.get('#tf_description').should('have.value','enter description')
            cy.get('#btn_submit').click()
        })
})