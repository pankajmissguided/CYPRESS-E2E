describe('login-logout',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include','webapps')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('myitem',{log: true})
        cy.contains('Signin').click()

    })
    it('click on login and do record error msg',()=>{
      cy.fixture('user').then(user =>{
      const username = user.invalidusername
      const password = user.invalidpassword
    //  cy.get('#user_login').type(username)
    //  cy.get('#user_password').type(password)
     // cy.get('.btn').click()
     cy.login(username,password)
     
     cy.get('.span6').should('be.visible').and('contain','Login and/or password are wrong.')
 })
        
    })
    it('should do successful login',()=>{
        cy.fixture('user').then(user =>{
            const username = user.uid
            const password = user.pwd
            //cy.get('#user_login').type(username)
            //cy.get('#user_password').type(password)
           // cy.get('#user_remember_me').click()
           // cy.get('.btn').click()
           cy.login(username,password)
          
            cy.get('.nav-tabs').should('be.visible')
            cy.get('h2').should('contain','Cash Accounts')
    })
})
   
})
