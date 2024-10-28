export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-order'],
  rules: {
    // Allow Tailwind CSS at-rules and directives
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer'
        ]
      }
    ],

    // Class naming pattern (including Tailwind classes)
    'selector-class-pattern': null,

    // Allow CSS custom properties for Tailwind
    'custom-property-pattern': null,

    // Order declarations
    'order/properties-alphabetical-order': true,

    // Allow empty sources in Vue components
    'no-empty-source': null,

    // Handle CSS modules composes
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['composes']
      }
    ],

    // Common vendor prefixes in Tailwind
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'text-size-adjust', 'tap-highlight-color']
      }
    ],

    // Allow Tailwind important modifier
    'declaration-no-important': null,

    // Handle Vue scoped styles
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted', 'where']
      }
    ],

    // Additional Vue-specific rules
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ],

    // Media query rules
    'media-feature-range-notation': 'prefix',

    // Allow CSS nesting
    'no-descending-specificity': null,

    // Custom Tailwind-friendly rules
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme']
      }
    ],

    // Handle Tailwind @screen directive
    'media-query-no-invalid': null
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        // Specific rules for Vue Single File Components
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'slotted', 'where']
          }
        ]
      }
    }
  ]
}