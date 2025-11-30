import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': ['error', 'all'],
    'camelcase': ['warn', { properties: 'always' }],
    'arrow-parens': 'off',
    'operator-linebreak': ['error', 'before'],
    // 'eslintstyle/brace-style': '1tbs',
  },
  unicorn: false,
  vue: {
    overrides: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: [['script', 'template'], 'style'],
        },
      ],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'TWO_WAY_BINDING',
            'CONTENT',
            'RENDER_MODIFIERS',
            'ATTR_DYNAMIC',
            'ATTR_STATIC',
            'ATTR_SHORTHAND_BOOL',
            'OTHER_DIRECTIVES',
            'EVENTS',
          ],
          alphabetical: false,
        },
      ],
      'vue/no-reserved-component-names': 0,
      'vue/no-mutating-props': 1,
      curly: ['error', 'all'],
      'no-console': 'warn',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-misleading-capturing-group': 'off',
    },
  },
  typescript: {
    overrides: {
      'ts/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],
      curly: ['error', 'all'],
    },
  },
  toml: {
    overrides: {
      'toml/indent': [
        'error',
        2,
        {
          subTables: 1,
          keyValuePairs: 1,
        },
      ],
    },
  },
  overrides: [],
  ignores: ['.gitlab/', 'README.md', '**/*.d.ts', 'node_modules', 'dev-dist/', '*.tsbuildinfo'],
})
