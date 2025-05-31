import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { assert, loadFixture } from '@codemod-utils/tests';

import type { PluginOptions } from '../../src/options.js';
import type { NodeType } from '../../src/utils/index.js';
import { formatFile } from './format-file.js';

type DirJSON = Parameters<typeof loadFixture>[0];

type Options = {
  fileName: string;
  fixturePath: string;
  pluginOptions?: Partial<PluginOptions<NodeType>>;
};

export async function runPrettierOnFile(options: Options): Promise<void> {
  const { fileName, fixturePath, pluginOptions } = options;

  const { inputProject, outputProject } = (await import(
    join('../fixtures', fixturePath, 'index.js')
  )) as {
    inputProject: DirJSON;
    outputProject: DirJSON;
  };

  const projectRoot = join('tmp', fixturePath);

  loadFixture(outputProject, { projectRoot });

  const newFileExpected = readFileSync(join(projectRoot, fileName), 'utf8');

  loadFixture(inputProject, { projectRoot });

  const oldFile = readFileSync(join(projectRoot, fileName), 'utf8');

  let newFile = await formatFile(oldFile, pluginOptions);

  assert.strictEqual(newFile, newFileExpected, 'Formatting works.');

  // Check idempotence
  newFile = await formatFile(newFile, pluginOptions);

  assert.strictEqual(newFile, newFileExpected, 'Formatting is idempotent.');
}
