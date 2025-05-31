import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-15', async function () {
  await runPrettierOnFile({
    fileName: 'file-15.js',
    fixturePath: 'printers/default-options',
  });
});
