export const cssValueValidator = (value: string): boolean => {
  const isAllovedWord = (word: string): boolean => [
    'auto',
    'inherit',
    'initial',
    'unset'
  ].includes(word);
  const allowedSufixes = [
    'px',
    'em',
    'rem',
    '%',
    'vh',
    'vw'
  ];
  const allowedValues = new RegExp(`(\\d*\\.?\\d+)(${allowedSufixes.join('|')})`);
  switch (true) {
  case isAllovedWord(value):
    return true;
  case allowedValues.exec(value)?.[0] === value:
    return true;
  default:
    return false;
  }
};
