/** @type {import('prettier').Config} */
const config = {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/.*$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
