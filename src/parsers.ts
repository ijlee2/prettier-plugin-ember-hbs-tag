import type { Parser, ParserOptions } from 'prettier';
import { parsers as prettierParsers } from 'prettier/plugins/babel';

import { type NodeType, PARSER_NAME, PRINTER_NAME } from './utils/index.js';

const parser = prettierParsers['babel-ts'] as Parser<NodeType>;

async function parse(text: string, options: ParserOptions<NodeType>) {
  const ast = await parser.parse(text, options);

  return ast;
}

export const parsers: Record<string, Parser<NodeType>> = {
  [PARSER_NAME]: {
    ...parser,
    astFormat: PRINTER_NAME,
    parse,
  },
};
