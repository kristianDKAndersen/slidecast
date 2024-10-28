import js from '@eslint/js'
import * as parser from '@typescript-eslint/parser';
import typescript from '@typescript-eslint/eslint-plugin'
import * as eslintTs from '@typescript-eslint/eslint-plugin';

import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue';
import tailwind from 'eslint-plugin-tailwindcss'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  
  // Vue-specific configuration
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: pluginVue.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: false
        },
        parser: {
          js: 'espree',
          ts: parser.default,
          '<template>': 'espree',
        },
        extraFileExtensions: ['.vue'],
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      vue: pluginVue,
      'tailwindcss': tailwind
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Vue specific rules
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/multi-word-component-names': 'warn',
      'vue/no-unused-components': 'error',
      'vue/no-v-html': 'warn',
    }
  },

  // TypeScript and general configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: parser.default,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: false
        }
      },
      globals: {
        process: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'tailwindcss': tailwind
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      
      // Tailwind specific rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      
      // General rules
      'no-console': isDevelopment ? 'off' : 'warn',
      'no-debugger': isDevelopment ? 'off' : 'warn',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],

      ...eslintTs.configs.recommended.rules,
    },
  },
  
  // Vue SFC specific configuration
  {
    files: ['**/*.vue'],
    rules: {
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style']
      }],
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style']
      }]
    }
  },

  prettier // Must be last to override other formatting rules
]