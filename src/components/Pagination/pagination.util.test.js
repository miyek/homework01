import { calculatePageNumber } from './pagination.util';

describe('calculatePageNumber', () => {
  it('should return 1', () => {
    expect(calculatePageNumber(10, 10)).toBe(1);
  });

  it('should return 2', () => {
    expect(calculatePageNumber(12, 10)).toBe(2);
  });

  it('should return 0', () => {
    expect(calculatePageNumber(0, 10)).toBe(0);
  });
});
