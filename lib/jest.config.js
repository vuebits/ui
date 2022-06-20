module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testMatch: ['**/_tests/*.spec.[jt]s'],
};
