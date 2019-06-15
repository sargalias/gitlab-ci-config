/* eslint-disable promise/prefer-await-to-then */

describe('accessibility events', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getByTestId('30').as('cell1');
    cy.getByTestId('31').as('cell2');
  });

  it('should color a cell on mouseDown', () => {
    cy.get('@cell1')
      .click()
      .hasBackgroundImage();
  });

  it('should color a cell on keyDown when key is "Enter" or Space', () => {
    cy.get('@cell1')
      .trigger('keydown', {
        key: 'Enter',
      })
      .hasBackgroundImage();

    cy.get('@cell2')
      .trigger('keydown', {
        key: ' ',
      })
      .hasBackgroundImage();
  });

  it('should do nothing when key pressed is not "Enter" or "Space"', () => {
    cy.get('@cell1')
      .trigger('keydown', {
        key: 'A',
      })
      .noBackgroundImage();

    cy.get('@cell2')
      .trigger('keydown', {
        key: 'b',
      })
      .noBackgroundImage();
  });

  it('should decolor cell on double click', () => {
    // Color cell one, then decolor it
    cy.get('@cell1')
      .click()
      .dblclick()
      .noBackgroundImage();

    // Color 2 cells
    cy.get('@cell1').click();
    cy.get('@cell2').click();

    // Decolor cell 1
    cy.get('@cell1')
      .click()
      .dblclick()
      .noBackgroundImage();
    cy.get('@cell2').hasBackgroundImage();
  });

  it('Cell should not be selectable', () => {
    cy.get('@cell1').should('css', 'user-select', 'none');
  });
});
