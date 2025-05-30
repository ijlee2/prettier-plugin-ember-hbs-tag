import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > preserve-trailing-whitespace > file-04', async function () {
  await runPrettierOnFile({
    fileName: 'file-04.js',
    fixturePath: 'printers/preserve-trailing-whitespace',
  });
});
