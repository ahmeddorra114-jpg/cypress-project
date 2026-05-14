Cypress.Commands.add('openHomePage', () => {
  cy.visit('https://practicesoftwaretesting.com/')
})

Cypress.Commands.add('typeSearch', (text) => {
  cy.get('[data-test="search-query"]').clear().type(text)
})

Cypress.Commands.add('openSignInPage', () => {
  cy.contains('Sign in').click()
})

Cypress.Commands.add('openFirstProduct', () => {
  cy.get('[data-test="product-name"]').first().click()
})

Cypress.Commands.add('getSearchInput', () => {
  return cy.get('[data-test="search-query"]')
})