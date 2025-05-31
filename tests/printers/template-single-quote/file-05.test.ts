import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > template-single-quote > file-05', async function () {
  await runPrettierOnFile({
    fileName: 'file-05.ts',
    fixturePath: 'printers/template-single-quote',
    pluginOptions: {
      templateSingleQuote: true,
    },
  });
});
