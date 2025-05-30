import { type AstPath, doc as AST, type Printer } from 'prettier';
import { printers as prettierPrinters } from 'prettier/plugins/estree';

import type { PluginOptions } from './options.js';
import { type NodeType, PRINTER_NAME } from './utils/index.js';

const printer = prettierPrinters['estree'] as Printer<NodeType>;

function embed(path: AstPath<NodeType>, options: PluginOptions<NodeType>) {
  const { node, parent } = path;

  const hasHbsTag =
    node?.type === 'TemplateLiteral' &&
    parent?.type === 'TaggedTemplateExpression' &&
    parent.tag.type === 'Identifier' &&
    parent.tag.name === 'hbs';

  if (!hasHbsTag) {
    return;
  }

  const text = node.quasis[0]?.value.raw ?? '';

  return async (
    textToDoc: (
      text: string,
      options: PluginOptions<NodeType>,
    ) => Promise<AST.builders.Doc>,
  ) => {
    const content = await textToDoc(text.trim(), {
      ...options,
      parser: 'glimmer',
      singleQuote: false,
    });

    if (content === '') {
      return ['``'];
    }

    return [
      '`',
      AST.builders.indent([AST.builders.hardline, content]),
      AST.builders.hardline,
      '`',
    ];
  };
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
