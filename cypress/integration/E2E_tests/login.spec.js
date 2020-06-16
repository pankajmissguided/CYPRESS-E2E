describe('login -logout tests',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('myitem',{log: true})
        cy.url().should('include','index.html')
        cy.title().should('include','Zero - Personal Banking - Loans - Credit Cards')
    })
    it('hould click on ign in button',()=>{
        cy.get('#signin_button').click()
    })
    it('Validate error msg diplayed',()=>{
        cy.fixture('user').then(user => {
            const username = user.invalidusername
            const password = user.invalidpassword

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('.btn').click()
            cy.get('.alert').should('contain','Login and/or password are wrong.')
          })

    })
    it('Validate ucceful login to account',()=>{
        cy.fixture('user').then(user =>{
            const username = user.uid
            const password = user.pwd
           // cy.get('#user_login').type(username)
           // cy.get('#user_password').type(password)
          //  cy.get('#user_remember_me').click()
           // cy.get('.btn').click()
           // cy.get('.nav').should('be.visible')
           cy.login(username,password)
        })
    })
    it('Validate logout ',()=>{
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')
    })
})