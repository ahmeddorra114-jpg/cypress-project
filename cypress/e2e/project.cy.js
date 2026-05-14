import HomePage from '../pages/HomePage'

let data

describe('Practice Software Testing Project', () => {

  before(() => {
    cy.fixture('data').then((d) => {
      data = d
    })
  })

  beforeEach(() => {
    HomePage.visit()
  })

  it('should open the home page successfully', () => {
    cy.url().should('include', 'practicesoftwaretesting.com')
    cy.get('body').should('be.visible')
    cy.title().should('not.be.empty')
  })

  it('should display the search input', () => {
    HomePage.searchInput().should('be.visible')
    HomePage.searchInput().should('have.attr', 'placeholder')
    cy.get('body').should('be.visible')
  })

  it('should search for a product', () => {
    HomePage.typeSearch(data.product1)

    HomePage.searchInput()
      .should('have.value', data.product1)

    cy.get('body')
      .should('contain.text', data.product1)

    cy.url()
      .should('include', 'practicesoftwaretesting.com')
  })

  it('should clear the search text', () => {
    HomePage.typeSearch(data.product1)

    HomePage.searchInput().clear()

    HomePage.searchInput()
      .should('have.value', '')

    HomePage.searchInput()
      .should('be.visible')

    cy.get('body')
      .should('be.visible')
  })

  it('should search using another product name', () => {
    HomePage.typeSearch(data.product2)

    HomePage.searchInput()
      .should('have.value', data.product2)

    cy.get('body')
      .should('contain.text', data.product2)

    cy.url()
      .should('include', 'practicesoftwaretesting.com')
  })

  it('should keep the search input enabled', () => {
    HomePage.searchInput()
      .should('be.visible')

    HomePage.searchInput()
      .should('not.be.disabled')

    cy.get('body')
      .should('be.visible')
  })

  it('should search using a third product name', () => {
    HomePage.typeSearch(data.product3)

    HomePage.searchInput()
      .should('have.value', data.product3)

    cy.get('body')
      .should('contain.text', data.product3)

    cy.url()
      .should('include', 'practicesoftwaretesting.com')
  })

  it('should search for a non existing product', () => {
    HomePage.typeSearch(data.invalidProduct)

    HomePage.searchInput()
      .should('have.value', data.invalidProduct)

    cy.get('body')
      .should('be.visible')

    cy.url()
      .should('include', 'practicesoftwaretesting.com')
  })

  it('should open sign in page', () => {
    HomePage.openSignIn()

    cy.url()
      .should('include', '/auth/login')

    cy.contains('Login')
      .should('be.visible')

    cy.get('body')
      .should('be.visible')
  })

  it('should keep search editable after typing', () => {
    HomePage.typeSearch(data.product4)

    HomePage.searchInput()
      .should('have.value', data.product4)

    HomePage.searchInput()
      .should('be.visible')

    HomePage.searchInput()
      .should('not.be.disabled')
  })

  it('should show search results area after typing pliers', () => {
    HomePage.typeSearch(data.product1)

    HomePage.searchInput()
      .should('have.value', data.product1)

    cy.get('body')
      .should('contain.text', data.product1)

    cy.get('body')
      .should('be.visible')
  })

  it('should open product details when clicking a product', () => {
    HomePage.typeSearch(data.product1)

    HomePage.openFirstProduct()

    cy.url()
      .should('include', '/product/')

    cy.get('body')
      .should('be.visible')

    cy.get('[data-test="product-name"]')
      .should('exist')
  })

  it('should display add to cart button on product details page', () => {
    HomePage.typeSearch(data.product1)

    HomePage.openFirstProduct()

    cy.url()
      .should('include', '/product/')

    cy.contains('Add to cart')
      .should('be.visible')

    cy.get('body')
      .should('be.visible')
  })

  it('should display category filters', () => {
    cy.contains('By category')
      .should('be.visible')

    cy.contains('Hand Tools')
      .should('exist')

    cy.get('body')
      .should('be.visible')
  })

  it('should display price range filter', () => {
    cy.contains('Price Range')
      .should('be.visible')

    cy.get('body')
      .should('be.visible')

    cy.url()
      .should('include', 'practicesoftwaretesting.com')
  })

})