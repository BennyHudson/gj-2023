/* eslint-disable no-undef */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/jsx-no-undef': [
      2,
      {
        allowGlobals: true,
      },
    ],
    'import/order': [
      1, 
      { 
        'groups': [
          'external', 
          'builtin', 
          'internal', 
          'sibling', 
          'parent', 
          'index'
        ], 
        'pathGroups': [
          { 
            'pattern': 'components', 
            'group': 'internal' 
          }, 
          { 
            'pattern': 'common', 
            'group': 'internal' 
          }, 
          { 
            'pattern': 'routes/ **', 
            'group': 'internal' 
          }, 
          { 
            'pattern': 'assets/**', 
            'group': 'internal', 
            'position': 'after' 
          }
        ], 
        'pathGroupsExcludedImportTypes': [
          'internal'
        ], 
        'alphabetize': { 
          'order': 'asc', 
          'caseInsensitive': true 
        } 
      }
    ] 
  },
}
