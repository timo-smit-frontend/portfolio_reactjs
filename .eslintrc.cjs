/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  // Base config
  extends: ['eslint:recommended'],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'prettier/prettier': [
          'error',
          {
            semi: false,
            tabWidth: 2,
            printWidth: 80,
            jsxSingleQuote: true,
            trailingComma: 'none',
          }
        ]
      },
      plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
      ],
      settings: {
        react: {
          version: 'detect'
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' }
        ]
      }
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off'
      },
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: 'plugin:@typescript-eslint/recommended'
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true
      }
    }
  ]
}
