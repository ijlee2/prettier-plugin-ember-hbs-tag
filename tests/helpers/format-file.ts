import { EOL } from 'node:os';

import { format } from 'prettier';

import type { PluginOptions } from '../../src/options.js';
import type { NodeType } from '../../src/utils/index.js';

const defaultOptions = {
  printWidth: 80,
  singleQuote: true,
  templateSingleQuote: false,
};

const onPosix = EOL === '\n';

export async function formatFile(
  file: string,
  pluginOptions?: Partial<PluginOptions<NodeType>>,
): Promise<string> {
  return await format(file, {
    ...defaultOptions,
    ...pluginOptions,
    endOfLine: onPosix ? 'lf' : 'crlf',
    parser: 'ember-hbs-tag',
    plugins: ['./dist-for-testing/src/index.js'],
  });
}
