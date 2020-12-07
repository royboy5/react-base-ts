module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '@Components': './src/components',
          '@Pages': './src/pages',
          '@Styles': './src/styles',
        },
      },
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
