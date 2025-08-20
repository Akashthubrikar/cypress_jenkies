describe('Example Test', () => {
  it('Visits Google and checks title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
  it('Akash Dummy test to check Jenkins trigger', () => {
  expect(true).to.equal(true);
});
});
