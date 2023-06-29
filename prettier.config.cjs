/** @typedef  {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig*/
/** @typedef  {import('prettier').Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  arrowParens: 'always',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  // pluginSearchDirs: false,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindConfig: './packages/config/tailwind',
  importOrder: [],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.4',
  singleAttributePerLine: true,
};

module.exports = config;
