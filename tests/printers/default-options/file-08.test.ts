import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-08', async function () {
  await runPrettierOnFile({
    fileName: 'file-08.ts',
    fixturePath: 'printers/default-options',
  });
});
