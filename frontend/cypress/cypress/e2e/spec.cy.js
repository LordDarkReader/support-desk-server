describe('empty spec', () => {
  it('passes', () => {

    cy.visit('http://localhost:3000')
    cy.get('#dupa').click();

    cy.get('input[name=email]').type('czak2@wp.pl')
    cy.get('input[name=password]').type(`dupa`)
    cy.get('#submitButton').click()

    cy.get('#dupa').click();
    cy.get('select').type('iPhone')
    cy.get('textarea').type('description')
    cy.get('form').submit()
    //cy.request('POST', 'http://localhost:5000/api/tickets/', { description: 'test1', product: 'iPhone' })
    cy.request({method: 'POST', url: 'http://localhost:5000/api/tickets/', body: {description: 'test1', product: 'iPhone'} ,auth: {bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDdlZWFjZjZiNjVmZTM0YTQ1ZDQ4NSIsImlhdCI6MTY1ODMyMTcwOSwiZXhwIjoxNjYwOTEzNzA5fQ.j19o3PGwDEjfQKjOo8uRyCDf5xKKj2AIlY_IZ3L9JbU'}})
  })
})