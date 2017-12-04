module.exports = {
  'env': {
    'es6': true
  },
  'extends': ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  'plugins': ['prettier'],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'es5',
        'semi': true,
        'bracketSpacing': false
      }
    ],
    'no-cond-assign': 0,
    'no-irregular-whitespace': 2,
    'no-unexpected-multiline': 2,
    'valid-jsdoc': [
      2,
      {
        'requireParamDescription': false,
        'requireReturnDescription': false,
        'requireReturn': false,
        'prefer': {
          'returns': 'return'
        }
      }
    ],
    'curly': [
      2,
      'multi-line'
    ],
    'guard-for-in': 2,
    'no-caller': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-invalid-this': 1,
    'no-multi-spaces': 0,
    'no-multi-str': 2,
    'no-new-wrappers': 2,
    'no-throw-literal': 2,
    'no-with': 2,
    'no-unused-vars': [
      1,
      {
        'args': 'none'
      }
    ],
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'brace-style': 2,
    'camelcase': [
      0,
      {
        'properties': 'never'
      }
    ],
    'comma-dangle': [
      0,
      'always-multiline'
    ],
    'comma-spacing': 2,
    'comma-style': 0,
    'computed-property-spacing': 2,
    'eol-last': 1,
    'func-call-spacing': 1,
    'key-spacing': 1,
    'keyword-spacing': 1,
    'linebreak-style': 2,
    'max-len': [
      0,
      {
        'code': 80,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignorePattern': '^goog.(module|require)'
      }
    ],
    'new-cap': 2,
    'no-array-constructor': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [
      2,
      {
        'max': 2
      }
    ],
    'no-new-object': 2,
    'no-trailing-spaces': 1,
    'object-curly-spacing': 1,
    'one-var': [
      0,
      {
        'var': 'always',
        'let': 'never',
        'const': 'never'
      }
    ],
    'padded-blocks': [
      1,
      'never'
    ],
    'quote-props': [
      2,
      'consistent'
    ],
    'quotes': [
      1,
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'require-jsdoc': [
      0,
      {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': true
        }
      }
    ],
    'semi-spacing': 2,
    'semi': 2,
    'space-before-blocks': 1,
    'space-before-function-paren': [
      2,
      'never'
    ],
    'spaced-comment': [
      1,
      'always'
    ],
    'arrow-parens': [
      0,
      'always'
    ],
    'constructor-super': 2,
    'generator-star-spacing': [
      0,
      'after'
    ],
    'no-this-before-super': 2,
    'no-var': 0,
    'prefer-spread': 0,
    'rest-spread-spacing': 2,
    'yield-star-spacing': [
      1,
      'after'
    ],
    'no-use-before-define': 1,
    'indent': [1, 2, {'SwitchCase': 1}],
    'no-console': 0,
    'prefer-template': 0,
    'no-restricted-syntax': 0,
    'object-shorthand': 1,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-undef': 1,
    'no-await-in-loop': 0,
    'global-require': 0,
    'strict': 0,
    'prefer-const': 1,
    'func-names': 0
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'globalReturn': true,
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  }
};