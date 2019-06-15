import randomHue from './randomHue';

describe('randomHue', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  test('should generate a hue value between 0 and 359', () => {
    for (let i = 0; i < 1000; i++) {
      expect(randomHue()).toBeGreaterThanOrEqual(0);
      expect(randomHue()).toBeLessThan(360);
    }
  });

  test('should generate unique colors for the first 360 times', () => {
    const numberSet = new Set();
    for (let i = 0; i < 360; i++) {
      numberSet.add(randomHue());
    }
    expect(numberSet.size).toBe(360);
  });

  test('should return colors that have been shuffled with the array-shuffle function', async () => {
    const allHues = Array.from({ length: 360 }, (el, i) => i);
    const mockHues = [10, 7, 5];
    const mockShuffle = jest.fn(() => mockHues);

    jest.doMock('array-shuffle', () => mockShuffle);
    const { default: getRandomHue } = await import('./randomHue');

    mockHues.forEach(el => {
      const hue = getRandomHue();
      expect(hue).toBe(el);
    });
    expect(mockShuffle).toHaveBeenCalledTimes(1);
    expect(mockShuffle).toHaveBeenCalledWith(allHues);
  });
});
