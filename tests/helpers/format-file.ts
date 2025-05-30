import { format } from 'prettier';

import {
  type NodeType,
  PARSER_NAME,
  type PluginOptions,
} from '../../src/index.js';

const defaultOptions = {
  printWidth: 80,
  singleQuote: true,
};

export async function formatFile(
  file: string,
  pluginOptions?: Partial<PluginOptions<NodeType>>,
): Promise<string> {
  return await format(file, {
    ...defaultOptions,
    ...pluginOptions,
    parser: PARSER_NAME,
    plugins: ['./dist-for-testing/src/index.js'],
  });
}
