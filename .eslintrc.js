/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['@tatsutakeinjp/eslint-config'], // uses the config in `packages/config/eslint`
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
  },
  settings: {
    next: {
      rootDir: ['apps/docs', 'apps/frontend'],
    },
  },
};

module.exports = config;
