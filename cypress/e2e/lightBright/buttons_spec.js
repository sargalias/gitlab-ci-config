/* eslint-disable promise/prefer-await-to-then, jest/valid-expect-in-promise */

beforeEach(() => {
  cy.visit('/');
  cy.getByTestId('1').as('cell1');
  cy.getByTestId('2').as('cell2');
  cy.getByTestId('3').as('cell3');
  cy.getByTestId('resetLastColorBtn').as('resetLastColorBtn');
  cy.getByTestId('resetAllBtn').as('resetAllBtn');
});

it('reset color buttons should work correctly', () => {
  // Color 3 cells
  cy.get('@cell1').click();
  cy.get('@cell2').click();
  cy.get('@cell3').click();

  // Decolor the last cell and assert
  cy.get('@resetLastColorBtn').click();
  cy.get('@cell1').hasBackgroundImage();
  cy.get('@cell2').hasBackgroundImage();
  cy.get('@cell3').noBackgroundImage();

  // Decolor the last cell and assert
  cy.get('@resetLastColorBtn').click();
  cy.get('@cell1').hasBackgroundImage();
  cy.get('@cell2').noBackgroundImage();
  cy.get('@cell3').noBackgroundImage();

  // Color another cell
  cy.get('@cell3').click();
  cy.get('@cell1').hasBackgroundImage();
  cy.get('@cell2').noBackgroundImage();
  cy.get('@cell3').hasBackgroundImage();

  // Decolor all cells and assert
  cy.get('@resetAllBtn').click();
  cy.get('@cell1').noBackgroundImage();
  cy.get('@cell2').noBackgroundImage();
  cy.get('@cell3').noBackgroundImage();

  // Color 3 cells
  cy.get('@cell1').click();
  cy.get('@cell2').click();
  cy.get('@cell3').click();

  // Decolor the last cell and assert
  cy.get('@resetLastColorBtn').click();
  cy.get('@cell1').hasBackgroundImage();
  cy.get('@cell2').hasBackgroundImage();
  cy.get('@cell3').noBackgroundImage();
});
