import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'no-use-before-define': ['error', { variables: false }],
      'no-multi-str': 0
    }
  }
]
