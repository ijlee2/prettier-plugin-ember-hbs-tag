import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > preserve-trailing-whitespace > file-14', async function () {
  await runPrettierOnFile({
    fileName: 'file-14.js',
    fixturePath: 'printers/preserve-trailing-whitespace',
    pluginOptions: {
      preserveTrailingWhitespace: true,
    },
  });
});
