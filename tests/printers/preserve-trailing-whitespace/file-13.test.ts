import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > preserve-trailing-whitespace > file-13', async function () {
  await runPrettierOnFile({
    fileName: 'file-13.js',
    fixturePath: 'printers/preserve-trailing-whitespace',
    pluginOptions: {
      preserveTrailingWhitespace: true,
    },
  });
});
