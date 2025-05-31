import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > default-options > file-12', async function () {
  await runPrettierOnFile({
    fileName: 'file-12.js',
    fixturePath: 'printers/default-options',
  });
});
