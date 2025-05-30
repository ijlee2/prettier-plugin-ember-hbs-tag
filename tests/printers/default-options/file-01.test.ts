import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-01', async function () {
  await runPrettierOnFile({
    fileName: 'file-01.ts',
    fixturePath: 'printers/default-options',
  });
});
