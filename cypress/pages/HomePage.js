class HomePage {

  visit() {
    cy.visit('https://practicesoftwaretesting.com/')
  }

  searchInput() {
    return cy.get('[data-test="search-query"]')
  }

  typeSearch(text) {
    this.searchInput().clear().type(text)
  }

  openSignIn() {
    cy.contains('Sign in').click()
  }

  openFirstProduct() {
    cy.get('[data-test="product-name"]').first().click()
  }

}

export default new HomePage()