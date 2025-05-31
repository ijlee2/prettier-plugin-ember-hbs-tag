import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > template-single-quote > file-10', async function () {
  await runPrettierOnFile({
    fileName: 'file-10.ts',
    fixturePath: 'printers/template-single-quote',
    pluginOptions: {
      templateSingleQuote: true,
    },
  });
});
