import snakeCaseToCapitalText from './snakeCaseToCapitalText';

describe('snakeCaseToCapitalText', () => {
  it('should convert snake case to capital text', () => {
    expect(snakeCaseToCapitalText('hello_there')).toBe('Hello There');
    expect(snakeCaseToCapitalText('snake_case_to_capital_text')).toBe(
      'Snake Case To Capital Text');
    expect(snakeCaseToCapitalText('this_is_a_long_snake_case_string')).toBe(
      'This Is A Long Snake Case String');
  });

  it('should handle single-word input', () => {
    expect(snakeCaseToCapitalText('single')).toBe('Single');
  });

  it('should handle empty input', () => {
    expect(snakeCaseToCapitalText('')).toBe('');
  });

  it('should handle input with leading underscore', () => {
    expect(snakeCaseToCapitalText('_start_with_underscore')).toBe(
      ' Start With Underscore');
  });

  it('should handle input with trailing underscore', () => {
    expect(snakeCaseToCapitalText('end_with_underscore_')).toBe(
      'End With Underscore ');
  });

  it('should handle input with multiple consecutive underscores', () => {
    expect(snakeCaseToCapitalText('consecutive__underscores')).toBe(
      'Consecutive  Underscores');
  });

  it('should handle input with non-alphabet characters', () => {
    expect(snakeCaseToCapitalText('hello_there!how_are_you?')).toBe(
      'Hello There!how Are You?');
  });
});