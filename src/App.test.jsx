import React from 'react';
import { render } from 'testUtils';
import App from './App';

test('test', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
  expect(1).toBe(2);
});
