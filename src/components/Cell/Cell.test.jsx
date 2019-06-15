import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Cell from './Cell';

afterEach(cleanup);

describe('Cell colors', () => {
  test('Cell should be colored when hue prop exists', () => {
    const hue = 150;
    const { getByTestId } = render(<Cell index="1" hue={hue} />);
    const cellNode = getByTestId('1');
    expect(cellNode.classList.contains('Cell')).toBe(true);
    expect(cellNode.classList.contains('Cell___isOn')).toBe(true);
    // TODO: jsdom can't test for CSS custom properties. Use a different testing environment
  });

  test('Cell should be colored when hue prop has value of 0', () => {
    const hue = 0;
    const { getByTestId } = render(<Cell index="1" hue={hue} />);
    const cellNode = getByTestId('1');
    expect(cellNode.classList.contains('Cell')).toBe(true);
    expect(cellNode.classList.contains('Cell___isOn')).toBe(true);
  });
});

describe('Cell events', () => {
  test('Cell should fire its prop "handleClick" on mousedown event', () => {
    const mockHandleClick = jest.fn();
    const { getByTestId } = render(
      <Cell index="1" handleClick={mockHandleClick} />,
    );
    const cellNode = getByTestId('1');

    fireEvent.mouseDown(cellNode);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test('Cell should fire its prop "handleMouseOver" on mouseover event', () => {
    const mockHandleMouseOver = jest.fn();
    const { getByTestId } = render(
      <Cell index="1" handleMouseOver={mockHandleMouseOver} />,
    );
    const cellNode = getByTestId('1');

    fireEvent.mouseOver(cellNode);

    expect(mockHandleMouseOver).toHaveBeenCalledTimes(1);
  });
});
