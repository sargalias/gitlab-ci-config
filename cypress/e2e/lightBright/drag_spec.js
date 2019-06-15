/* eslint-disable promise/prefer-await-to-then, jest/valid-expect-in-promise */

describe('drag functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getByTestId('30').as('cell1');
    cy.getByTestId('31').as('cell2');
    cy.getByTestId('32').as('cell3');
    cy.getByTestId('33').as('cell4');
    cy.getByTestId('34').as('cell5');
  });

  it('should start on mousedown and stop on mouseup or when the mouse leaves the board and should focus dragged over cells', () => {
    cy.get('@cell1')
      .trigger('mouseover')
      .noBackgroundImage();

    // begin drag
    cy.get('@cell1')
      .trigger('mousedown')
      .hasBackgroundImage();
    cy.get('@cell2')
      .trigger('mouseover')
      .hasBackgroundImage();
    cy.focused().then($jCell => {
      expect($jCell[0]).attr('data-testid', '31');
    });

    cy.get('@cell3')
      .trigger('mouseover')
      .hasBackgroundImage();
    cy.focused().then($jCell => {
      expect($jCell[0]).attr('data-testid', '32');
    });

    // end drag
    cy.get('@cell4')
      .trigger('mouseup')
      .trigger('mouseover')
      .noBackgroundImage();
    cy.focused().then($jCell => {
      expect($jCell[0]).not.attr('data-testid', '33');
    });

    // begin drag
    cy.get('@cell2')
      .trigger('mousedown')
      .hasBackgroundImage();

    // end drag
    cy.getByTestId('board').trigger('mouseout');

    cy.get('@cell5')
      .trigger('mouseover')
      .noBackgroundImage();
  });

  it('should color all Cells the same color', () => {
    let firstBackgroundImage;

    const getCellBackgroundImage = jCell =>
      getComputedStyle(jCell[0]).backgroundImage;

    const assertSameBackgroundImage = (image1, image2) =>
      expect(image1).eq(image2);

    const assertNotSameBackgroundImage = (image1, image2) =>
      expect(image1).not.eq(image2);

    // click to begin drag
    cy.get('@cell1')
      .trigger('mousedown')
      .then(jCell => {
        firstBackgroundImage = getCellBackgroundImage(jCell);
      });

    cy.get('@cell2')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });
    cy.get('@cell3')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });

    // end drag
    cy.get('@cell4').trigger('mouseup');

    // begin new drag
    cy.get('@cell1')
      .trigger('mousedown')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertNotSameBackgroundImage(firstBackgroundImage, backgroundImage);
        firstBackgroundImage = getCellBackgroundImage(jCell);
      });

    cy.get('@cell2')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });
    cy.get('@cell3')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });

    // end drag
    cy.get('@cell4').trigger('mouseup');
  });
});
