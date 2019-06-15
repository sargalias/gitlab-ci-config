import React from 'react';
import { render, cleanup, fireEvent } from 'testUtils';
import LightBrightApp from './LightBrightApp';

let getByTestId;
let cells;

beforeEach(() => {
  cleanup();
  ({ getByTestId } = render(<LightBrightApp numCells={5} />));
  cells = Array.from({ length: 5 }, (el, i) => getByTestId(`${i}`));
});

afterAll(cleanup);

describe('LightBrightApp', () => {
  test('should render a number of cells equal to its numCells prop', () => {
    expect(document.querySelectorAll('[data-cell]').length).toBe(5);
  });

  describe('simple clicks and keypresses', () => {
    test('should color a Cell when it is clicked', () => {
      // jsdom can't test CSS custom properties yet.
      const cell = cells[1];

      fireEvent.mouseDown(cell);

      expect(cell.classList.contains('Cell___isOn')).toBe(true);
      expect(cell.classList.contains('Cell')).toBe(true);
    });

    test('should color a Cell which has a keypress event with {Enter} or {Space}', () => {
      const [cell1, cell2, cell3] = cells;

      fireEvent.keyDown(cell1, { key: 'Enter' });
      fireEvent.keyDown(cell2, { key: ' ' });
      fireEvent.keyDown(cell3, { key: 'A' });

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);
      expect(cell3.classList.contains('Cell___isOn')).toBe(false);
    });
  });

  describe('drag functionality', () => {
    test('when clicking on a Cell and not releasing, mousing over other Cells should color them and give them focus', () => {
      const mockFocus = jest.fn();
      HTMLElement.focus = mockFocus;
      const [cell1, cell2, cell3, cell4] = cells;
      cell1.focus = mockFocus;
      cell2.focus = mockFocus;
      cell3.focus = mockFocus;
      cell4.focus = mockFocus;
      const board = getByTestId('board');

      // Don't color cells if mousedown has not happened yet
      fireEvent.mouseOver(cell1);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);
      // Don't focus Cell
      expect(cell1.focus).not.toHaveBeenCalled();

      // Trigger mousedown and mouseover
      fireEvent.mouseDown(cell1);
      fireEvent.mouseOver(cell2);
      fireEvent.mouseOver(cell3);
      // Focus Cell
      expect(cell2.focus).toHaveBeenCalled();
      expect(cell3.focus).toHaveBeenCalled();

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);
      expect(cell3.classList.contains('Cell___isOn')).toBe(true);

      // Trigger mouseup on board
      fireEvent.mouseUp(board);

      // Further mouseovers should have no effect
      fireEvent.mouseOver(cell4);
      expect(cell4.classList.contains('Cell___isOn')).toBe(false);
    });

    test('keypress events with {Enter} or {Space}, followed by mousing over other Cells, should only color the Cell with the keypress event', () => {
      const [cell1, cell2] = cells;

      fireEvent.keyDown(cell1, { key: 'Enter' });
      fireEvent.mouseOver(cell2);

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);
    });
  });

  describe('double click', () => {
    test('should remove color', () => {
      const [cell1, cell2] = cells;

      // Don't color cells if mousedown has not happened yet
      fireEvent.mouseDown(cell1);
      fireEvent.doubleClick(cell1);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);

      fireEvent.mouseDown(cell1);
      fireEvent.mouseDown(cell2);
      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);

      fireEvent.doubleClick(cell1);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);
    });
  });

  describe('reset last color button', () => {
    test('should reset the last color from single click', () => {
      const [cell] = cells;
      const resetLastColorBtn = getByTestId('resetLastColorBtn');

      fireEvent.mouseDown(cell);
      fireEvent.click(resetLastColorBtn);

      expect(cell.classList.contains('Cell')).toBe(true);
      expect(cell.classList.contains('Cell___isOn')).toBe(false);
    });

    test('should reset a color unless the board is empty, even when some colors have been overwritten', () => {
      const [cell1, cell2] = cells;
      const resetLastColorBtn = getByTestId('resetLastColorBtn');

      fireEvent.mouseDown(cell1);
      fireEvent.mouseDown(cell2);
      fireEvent.mouseDown(cell2);

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);

      fireEvent.click(resetLastColorBtn);
      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);

      fireEvent.click(resetLastColorBtn);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);
    });

    test('should work correctly after reset all button has been pressed', () => {
      const [cell1, cell2, cell3] = cells;
      const resetLastColorBtn = getByTestId('resetLastColorBtn');
      const resetAllBtn = getByTestId('resetAllBtn');

      fireEvent.mouseDown(cell1);
      fireEvent.mouseDown(cell2);
      fireEvent.mouseDown(cell3);
      fireEvent.click(resetAllBtn);

      fireEvent.mouseDown(cell1);
      expect(cell1.classList.contains('Cell___isOn')).toBe(true);

      fireEvent.click(resetLastColorBtn);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);
    });
  });

  describe('reset all button', () => {
    test('should do nothing when board is empty', () => {
      const [cell1, cell2] = cells;
      const resetAllBtn = getByTestId('resetAllBtn');

      fireEvent.click(resetAllBtn);

      expect(cell1.classList.contains('Cell___isOn')).toBe(false);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);
    });
  });

  test('should decolor all cells when clicked', () => {
    const [cell1, cell2, cell3] = cells;
    const resetAllBtn = getByTestId('resetAllBtn');

    fireEvent.mouseDown(cell1);
    fireEvent.mouseDown(cell2);
    fireEvent.mouseDown(cell2);
    fireEvent.click(resetAllBtn);

    expect(cell1.classList.contains('Cell___isOn')).toBe(false);
    expect(cell2.classList.contains('Cell___isOn')).toBe(false);
    expect(cell3.classList.contains('Cell___isOn')).toBe(false);
  });
});
