import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > preserve-trailing-whitespace > file-11', async function () {
  await runPrettierOnFile({
    fileName: 'file-11.js',
    fixturePath: 'printers/preserve-trailing-whitespace',
  });
});
