module.exports = {
  'extends': ['next'],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'],
      },
    ],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
  }
};