/* eslint-disable promise/prefer-await-to-then, jest/valid-expect-in-promise */

describe('colors', () => {
  it('should be unique', () => {
    const cellHues = [];
    const pushCellHue = jCell => {
      const cellHue = jCell[0].style.getPropertyValue('--hue');
      cellHues.push(cellHue);
    };

    cy.visit('/');
    cy.getByTestId('1')
      .click()
      .then(pushCellHue);
    cy.getByTestId('2')
      .click()
      .then(pushCellHue);
    cy.getByTestId('3')
      .click()
      .then(pushCellHue);
    cy.getByTestId('4')
      .click()
      .then(pushCellHue);

    cy.wrap(cellHues).then(cellHuesArr =>
      expect(new Set(cellHuesArr).size).eq(cellHuesArr.length),
    );
  });
});
