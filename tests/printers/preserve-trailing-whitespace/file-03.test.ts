import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > preserve-trailing-whitespace > file-03', async function () {
  await runPrettierOnFile({
    fileName: 'file-03.ts',
    fixturePath: 'printers/preserve-trailing-whitespace',
    pluginOptions: {
      preserveTrailingWhitespace: true,
    },
  });
});
