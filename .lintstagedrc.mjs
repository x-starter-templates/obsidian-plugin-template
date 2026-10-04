export default {
  '*.md': ['oxfmt'],
  '*.{json,jsonc}': ['oxfmt'],
  '*.{ts,js,cjs,mjs,tsx}': ['oxlint', 'oxfmt', () => 'tsc -p tsconfig.app.json --noEmit'],
};
