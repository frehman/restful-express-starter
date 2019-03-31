module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    // run `npx eslint . --fix` from the command line if you want to fix
    'object-curly-spacing': [1, 'always'],
    'no-var': 1,
    semi: [1, 'always']
  }
};
