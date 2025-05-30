import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-07', async function () {
  await runPrettierOnFile({
    fileName: 'file-07.ts',
    fixturePath: 'printers/default-options',
  });
});
