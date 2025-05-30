import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > preserve-trailing-whitespace > file-02', async function () {
  await runPrettierOnFile({
    fileName: 'file-02.ts',
    fixturePath: 'printers/preserve-trailing-whitespace',
    pluginOptions: {
      preserveTrailingWhitespace: true,
    },
  });
});
