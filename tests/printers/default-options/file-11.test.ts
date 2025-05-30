import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-11', async function () {
  await runPrettierOnFile({
    fileName: 'file-11.js',
    fixturePath: 'printers/default-options',
  });
});
