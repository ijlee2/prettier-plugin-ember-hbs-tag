import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';
import { assertFixture, loadFixture } from '@codemod-utils/tests';
import { format } from 'prettier';

import { PARSER_NAME } from '../../../../src/utils/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/index/my-app-ideal/index.js';

const userOptions = {
  printWidth: 80,
  singleQuote: true,
};

async function formatFile(file: string): Promise<string> {
  return await format(file, {
    ...userOptions,
    parser: PARSER_NAME,
    plugins: ['./dist-for-testing/src/index.js'],
  });
}

export async function runPrettier(): Promise<void> {
  const options = {
    projectRoot: 'tmp/index/my-app-ideal',
  };

  loadFixture(inputProject, options);

  const filePaths = findFiles('**/*.{cjs,cts,js,mjs,mts,ts}', {
    ignoreList: ['**/*.d.ts'],
    projectRoot: options.projectRoot,
  });

  await Promise.all(
    filePaths.map(async (filePath) => {
      const oldFile = readFileSync(join(options.projectRoot, filePath), 'utf8');
      const newFile = await formatFile(oldFile);

      writeFileSync(join(options.projectRoot, filePath), newFile, 'utf8');
    }),
  );

  assertFixture(outputProject, options);
}
