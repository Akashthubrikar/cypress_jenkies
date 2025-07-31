describe('Example Test', () => {
  it('Visits Google and checks title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});
