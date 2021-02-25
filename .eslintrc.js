module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    eqeqeq: 'error',
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'no-empty-pattern': 'off',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    // typescript rules
    '@typescript-eslint/no-explicit-any': 'off',
    // vue rules
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'template',
          'script',
          'style'
        ]
      }
    ],
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/eqeqeq': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    'vue/require-name-property': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
