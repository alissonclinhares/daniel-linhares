module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
