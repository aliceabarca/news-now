describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?q=apple&from=2023-10-30&to=2023-10-30&sortBy=popularity&apiKey=1787216ec63047c49fd5a2f7f7f2b026', {
      statusCode: 200,
      fixture: 'example.json'
    })
    cy.visit('http://localhost:3000/')
  })
  it('should show header', () => {
    cy.get('.news-now-title').should('contain','NEWS NOW')
      .get('.newspaper-img').should('be.visible')
  })
  it('should display articles title', () => {
    cy.get('.all-news').children().should('have.length', 3)
      .get('.all-news').children().first().contains('p', 'The Morning After: Samsung pays tribute to its flip phone past with limited-edition foldable')
      .get('.all-news').children().last().contains('p', 'How to connect a Nest Thermostat to Apple Home through Matter')
  })
  it('should be able to search', () => {
    cy.get('#search').type('morning')
      .get('.all-news').children().first().click()
      .url().should('contain', 'article/0')
      .get('.header').should('be.visible')
      .get('h2').should('contain', 'The Morning After: Samsung pays tribute to its flip phone past with limited-edition foldable')
      .get('.App > :nth-child(2) > :nth-child(2)').should('contain', 'Author: Mat Smith')
      .get('.App > :nth-child(2) > :nth-child(3)').should('contain', 'Samsung has unveiled the Galaxy Z Flip 5 Retro, a limited-edition foldable that pays homage to the SGH-E700 (AKA the SGH-E715 in the US), which came out 20 years ago in 2003. It has the same indigo blue and silver color combo as the original and a few special…')
      .get(':nth-child(2) > :nth-child(4)').should('contain', '2023-10-30T11:16:18Z')
      .get('.image').should('be.visible')
  })
})