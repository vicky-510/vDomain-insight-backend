module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    env: {
      node: true,
      es2021: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': 'warn',
    },
  };
  