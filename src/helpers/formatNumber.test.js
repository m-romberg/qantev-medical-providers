import formatNumber from './formatNumber';

describe('formatNumber', () => {
  it('should format a number with one commas', () => {
    expect(formatNumber('1234')).toBe('1,234');
  });

  it('should format a number with two comma', () => {
    expect(formatNumber('1234567')).toBe('1,234,567');
  });

  it('should format a number with multiple commas', () => {
    expect(formatNumber('1234567890')).toBe('1,234,567,890');
  });
});