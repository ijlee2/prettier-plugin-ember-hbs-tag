import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-09', async function () {
  await runPrettierOnFile({
    fileName: 'file-09.ts',
    fixturePath: 'printers/default-options',
  });
});
