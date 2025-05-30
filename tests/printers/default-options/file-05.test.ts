import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-05', async function () {
  await runPrettierOnFile({
    fileName: 'file-05.ts',
    fixturePath: 'printers/default-options',
  });
});
