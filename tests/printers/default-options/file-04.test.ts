import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-04', async function () {
  await runPrettierOnFile({
    fileName: 'file-04.js',
    fixturePath: 'printers/default-options',
  });
});
