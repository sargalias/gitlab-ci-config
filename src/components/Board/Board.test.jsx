import React from 'react';
import { render, fireEvent, cleanup } from 'testUtils';
import Board from './Board';

afterEach(cleanup);

test('Board should call its prop "handleBoardMouseUp" on mouseup and mouseleave events', () => {
  jest.resetModules();
  jest.doMock('components/Cell', () => () => null);
  const mockHandleBoardMouseUp = jest.fn();
  const { getByTestId } = render(
    <Board cells={[]} handleBoardMouseUp={mockHandleBoardMouseUp} />,
  );
  const board = getByTestId('board');

  fireEvent.mouseUp(board);
  fireEvent.mouseOut(board);

  expect(mockHandleBoardMouseUp).toHaveBeenCalledTimes(2);
});
