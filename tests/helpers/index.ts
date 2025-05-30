import { format } from 'prettier';

import {
  type NodeType,
  PARSER_NAME,
  type PluginOptions,
} from '../../src/index.js';

const sharedOptions = {
  printWidth: 80,
  singleQuote: true,
};

export async function formatFile(
  file: string,
  userOptions?: Partial<PluginOptions<NodeType>>,
): Promise<string> {
  return await format(file, {
    ...sharedOptions,
    ...userOptions,
    parser: PARSER_NAME,
    plugins: ['./dist-for-testing/src/index.js'],
  });
}
