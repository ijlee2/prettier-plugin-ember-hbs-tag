import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-13', async function () {
  await runPrettierOnFile({
    fileName: 'file-13.js',
    fixturePath: 'printers/default-options',
  });
});
