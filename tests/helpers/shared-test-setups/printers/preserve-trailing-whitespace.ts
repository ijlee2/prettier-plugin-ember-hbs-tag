import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { assert, loadFixture } from '@codemod-utils/tests';
import { format } from 'prettier';

import { PARSER_NAME } from '../../../../src/utils/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/printers/preserve-trailing-whitespace/index.js';

const codemodOptions = {
  projectRoot: 'tmp/printers/preserve-trailing-whitespace',
};

const userOptions = {
  preserveTrailingWhitespace: true,
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

export async function runPrettier(filePath: string): Promise<void> {
  loadFixture(outputProject, codemodOptions);

  const newFileExpected = readFileSync(
    join(codemodOptions.projectRoot, filePath),
    'utf8',
  );

  loadFixture(inputProject, codemodOptions);

  const oldFile = readFileSync(
    join(codemodOptions.projectRoot, filePath),
    'utf8',
  );

  let newFileActual = await formatFile(oldFile);

  assert.strictEqual(
    newFileActual,
    newFileExpected,
    'Formatting works the first time.',
  );

  // Check idempotence
  newFileActual = await formatFile(newFileActual);

  assert.strictEqual(
    newFileActual,
    newFileExpected,
    'Formatting is idempotent.',
  );
}
