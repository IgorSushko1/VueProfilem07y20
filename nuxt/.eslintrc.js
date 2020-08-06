module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',

    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],

  rules: {
    quotes: ['error', 'single'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: 'never',
      },
    ],
  },
}
