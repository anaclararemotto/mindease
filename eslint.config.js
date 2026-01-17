import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist', 'node_modules']
  },

  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/domain',
              from: './src',
              except: ['./src/domain']
            },
            {
              target: './src/infra',
              from: './src/presentation'
            }
          ]
        }
      ],

      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',

      'react/jsx-no-leaked-render': 'error',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  },

  reactX.configs['recommended-typescript'],
  reactDom.configs.recommended
]
