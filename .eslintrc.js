module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
  ],
  ignorePatterns: [
    'docs/dist',
    'docs/node_modules',
    'docs/public',
    'lib/dist',
    'lib/node_modules',
    'lib/types',
    'lib/styles',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: 'error',
    // typescript rules
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    // vue rules
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/eqeqeq': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    'vue/require-name-property': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/require-default-prop': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
