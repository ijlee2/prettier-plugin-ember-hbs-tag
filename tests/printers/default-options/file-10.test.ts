import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-10', async function () {
  await runPrettierOnFile({
    fileName: 'file-10.ts',
    fixturePath: 'printers/default-options',
  });
});
