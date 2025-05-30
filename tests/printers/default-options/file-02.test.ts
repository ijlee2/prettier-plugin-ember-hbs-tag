import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-02', async function () {
  await runPrettierOnFile({
    fileName: 'file-02.ts',
    fixturePath: 'printers/default-options',
  });
});
