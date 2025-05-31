import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';
import { format } from 'prettier';

const defaultOptions = {
  printWidth: 80,
  singleQuote: true,
};

async function formatFile(file, pluginOptions) {
  return await format(file, {
    ...defaultOptions,
    ...pluginOptions,
    parser: 'ember-hbs-tag',
    plugins: ['./dist/src/index.js'],
  });
}

export async function updateTestFixtures(projectRoot, pluginOptions) {
  const filePaths = findFiles('input/**/*.{cjs,cts,js,mjs,mts,ts}', {
    ignoreList: ['**/*.d.ts'],
    projectRoot,
  });

  await Promise.all(
    filePaths.map(async (filePath) => {
      const oldFile = readFileSync(join(projectRoot, filePath), 'utf8');
      const newFile = await formatFile(oldFile, pluginOptions);

      writeFileSync(
        join(projectRoot, filePath.replace(/^input\//, 'output/')),
        newFile,
        'utf8',
      );
    }),
  );

  console.log(`SUCCESS: Updated fixtures in ${projectRoot}.\n`);
}

async function main() {
  await Promise.all([
    updateTestFixtures('tests/fixtures/index/my-app'),

    updateTestFixtures('tests/fixtures/index/my-app-ideal'),

    updateTestFixtures('tests/fixtures/printers/default-options'),

    updateTestFixtures('tests/fixtures/printers/preserve-trailing-whitespace', {
      preserveTrailingWhitespace: true,
    }),
  ]);
}

main();
