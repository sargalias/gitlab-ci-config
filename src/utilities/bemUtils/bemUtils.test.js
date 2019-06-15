import bemObject from 'bem-css-modules';
import cn from 'classnames';
import bemUtils from './bemUtils';

jest.mock('bem-css-modules', () => {
  function mockBlock(cssModule, name, elementParam, modifierParam) {
    return [cssModule, name, elementParam, modifierParam];
  }
  const mockBemObject = jest.fn((cssModule, name) =>
    mockBlock.bind(null, cssModule, name),
  );
  mockBemObject.setSettings = jest.fn();
  return mockBemObject;
});

jest.mock('classnames', () => jest.fn());

test('bemUtils should call setSettings with correct parameters', () => {
  expect(bemObject.setSettings).toHaveBeenCalledWith({
    elementDelimiter: '_',
    modifierDelimiter: '___',
  });
});

test('bemUtils should correctly call underlying packages', () => {
  // act
  const blockWrapper = bemUtils('cssModule', 'name');
  blockWrapper('elementParam', 'modifierParam', 'parentClass');

  // assert
  expect(cn).toHaveBeenCalledWith(
    ['cssModule', 'name', 'elementParam', 'modifierParam'],
    'parentClass',
  );
});
