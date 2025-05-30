import type { SupportLanguage } from 'prettier';

import { PARSER_NAME } from './utils/index.js';

export const languages: SupportLanguage[] = [
  {
    extensions: ['.cjs', '.js', '.mjs'],
    group: 'JavaScript',
    name: 'ember-hbs-tag (JavaScript)',
    parsers: [PARSER_NAME],
    vscodeLanguageIds: ['javascript'],
  },
  {
    extensions: ['.cts', '.mts', '.ts'],
    group: 'TypeScript',
    name: 'ember-hbs-tag (TypeScript)',
    parsers: [PARSER_NAME],
    vscodeLanguageIds: ['typescript'],
  },
];
