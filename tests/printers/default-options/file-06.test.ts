import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-06', async function () {
  await runPrettierOnFile({
    fileName: 'file-06.ts',
    fixturePath: 'printers/default-options',
  });
});
