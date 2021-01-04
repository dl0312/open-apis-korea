module.exports = {
  extends: [
    'react-app',
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'parameter',
        format: ['strictCamelCase'], // Change if you want to.
        leadingUnderscore: 'allow',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/config/**/*.{ts,tsx}',
          '**/test/**/*.{ts,tsx}',
          '**/*.{test,spec}.{ts,tsx}',
          '**/scripts/**/*.{ts,tsx}',
          '**/jest.config.js',
          '**/jest.config.e2e.js',
          '**/next.config.js',
          '**/__tests__/**/*.{ts,tsx}',
        ],
        packageDir: ['./'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'no-continue': 'off',
    'no-shadow': 'off',
    'array-callback-return': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'warn',
    'consistent-return': 'off',
    'guard-for-in': 'off',
    'import/export': 'off',
    'no-redeclare': 'off',
    'max-classes-per-file': 'off',
    'react/jsx-no-target-blank': 'off',
    'prefer-destructuring': 'warn',
    'import/no-named-as-default': 'warn',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@search/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
  },
  plugins: ['import', 'jest-dom'],
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
