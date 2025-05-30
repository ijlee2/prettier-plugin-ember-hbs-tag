import type { AstPath, doc as AST, Printer } from 'prettier';
import { printers as prettierPrinters } from 'prettier/plugins/estree';

import type { PluginOptions } from './options.js';
import { type NodeType, PRINTER_NAME } from './utils/index.js';

const printer = prettierPrinters['estree'] as Printer<NodeType>;

function embed(/* path: AstPath<NodeType>, options: PluginOptions<NodeType> */) {
  // ...
}

function print(
  path: AstPath<NodeType>,
  options: PluginOptions<NodeType>,
  print: (path: AstPath<NodeType>) => AST.builders.Doc,
  args?: unknown,
): AST.builders.Doc {
  return printer.print(path, options, print, args);
}

export const printers: Record<string, Printer<NodeType>> = {
  [PRINTER_NAME]: {
    ...printer,
    // @ts-expect-error: Type <...> is not assignable to <...>
    embed,
    print,
  },
};
