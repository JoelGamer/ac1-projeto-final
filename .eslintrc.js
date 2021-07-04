module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'off',
    'no-restricted-globals': ['error', 'localStorage'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '__mocks__/**',
        '__tests__/**',
        'src/setupTests.ts',
      ],
    }],

    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts'] }],
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',

    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: { },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
