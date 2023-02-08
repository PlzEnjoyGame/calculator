describe('vue review submission testing', () => {
    it('passes if submission is successful', () => {
        cy.intercept('POST','https://my-json-server.typicode.com/PlzEnjoyGame/calculator/names').as("name post");
        cy.intercept('POST','https://my-json-server.typicode.com/PlzEnjoyGame/calculator/emails').as("email post");
        cy.intercept('POST','https://my-json-server.typicode.com/PlzEnjoyGame/calculator/reviews').as("review post");
        cy.visit('http://localhost:8080/review')
        cy.get('#name').type('Ola Nordmann')
        cy.get('#email').type('ola.nordmann@mail.com')
        cy.get('#review').type('This is a good app')
        cy.get('#submit').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your review has been successfully submitted!');
        })
    })

    it('passes if submission is disabled', () => {
        cy.visit('http://localhost:8080/review')
        cy.get('#name').type('Ola Nordmann')
        cy.get('#email').type('ola.nordmann')
        cy.get('#submit').should('be.disabled')
        cy.get('#name').clear()
        cy.get('#review').type('This is a good app')
        cy.get('#submit').should('be.disabled')
        cy.get('#name').type('Ola Nordmann')
        cy.get('#submit').should('be.disabled')
    })

})