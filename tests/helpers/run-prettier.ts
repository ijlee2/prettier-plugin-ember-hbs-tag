import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';
import { assertFixture, loadFixture } from '@codemod-utils/tests';

import type { NodeType, PluginOptions } from '../../src/index.js';
import { formatFile } from './format-file.js';

type DirJSON = Parameters<typeof loadFixture>[0];

type Options = {
  fixturePath: string;
  pluginOptions?: Partial<PluginOptions<NodeType>>;
};

export async function runPrettier(options: Options): Promise<void> {
  const { fixturePath, pluginOptions } = options;

  const { inputProject, outputProject } = (await import(
    join('../fixtures', fixturePath, 'index.js')
  )) as {
    inputProject: DirJSON;
    outputProject: DirJSON;
  };

  const projectRoot = join('tmp', fixturePath);

  loadFixture(inputProject, { projectRoot });

  const filePaths = findFiles('**/*.{cjs,cts,js,mjs,mts,ts}', {
    ignoreList: ['**/*.d.ts'],
    projectRoot,
  });

  await Promise.all(
    filePaths.map(async (filePath) => {
      const oldFile = readFileSync(join(projectRoot, filePath), 'utf8');
      const newFile = await formatFile(oldFile, pluginOptions);

      writeFileSync(join(projectRoot, filePath), newFile, 'utf8');
    }),
  );

  assertFixture(outputProject, { projectRoot });
}
