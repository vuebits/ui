import { cssValueValidator } from '../css-values-validator';

describe('cssValueValidator helper', () => {
  it('Shoudl return false for "random string"', () => {
    expect(cssValueValidator('random string')).toBe(false);
  });
  it('Shoudl return true for "auto", "inherit", "initial" or "unset"', () => {
    expect(cssValueValidator('auto')).toBe(true);
    expect(cssValueValidator('inherit')).toBe(true);
    expect(cssValueValidator('initial')).toBe(true);
    expect(cssValueValidator('unset')).toBe(true);
  });
  it('Shoudl return true for "100px" ".5em" "33.3%"', () => {
    expect(cssValueValidator('100px')).toBe(true);
    expect(cssValueValidator('.5em')).toBe(true);
    expect(cssValueValidator('33.3%')).toBe(true);
  });
  it('Shoudl return false for "100 px", " 100px", "100px ", "a100px", "100apx" "100pxa"', () => {
    expect(cssValueValidator('100 px')).toBe(false);
    expect(cssValueValidator(' 100px')).toBe(false);
    expect(cssValueValidator('100px ')).toBe(false);
    expect(cssValueValidator('a100px')).toBe(false);
    expect(cssValueValidator('a100apx')).toBe(false);
    expect(cssValueValidator('100pxa')).toBe(false);
  });
});
