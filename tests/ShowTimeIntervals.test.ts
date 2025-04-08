import ShowTimeIntervals from "../src/challenges/ShowTimeIntervals"

describe('ShowTimeIntervals', () => {
  test('basic test case', () => {
    const start = [1, 3, 6, 2];
    const duration = [2, 5, 1, 3];
    const volume = [50, 20, 100, 200];
    expect(ShowTimeIntervals(start, duration, volume)).toBe(300);
  });

  test('non-overlapping all shows', () => {
    const start = [1, 4, 7];
    const duration = [2, 2, 2];
    const volume = [10, 20, 30];
    expect(ShowTimeIntervals(start, duration, volume)).toBe(60);
  });

  test('all shows overlap, pick one with highest volume', () => {
    const start = [1, 1, 1];
    const duration = [5, 5, 5];
    const volume = [10, 50, 20];
    expect(ShowTimeIntervals(start, duration, volume)).toBe(50);
  });

  test('no shows', () => {
    expect(ShowTimeIntervals([], [], [])).toBe(0);
  });

  test('one show only', () => {
    expect(ShowTimeIntervals([2], [4], [42])).toBe(42);
  });
});