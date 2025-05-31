import { test } from '@codemod-utils/tests';

import { runPrettierOnFile } from '../../helpers/index.js';

test('printers > template-single-quote > file-04', async function () {
  await runPrettierOnFile({
    fileName: 'file-04.js',
    fixturePath: 'printers/template-single-quote',
    pluginOptions: {
      templateSingleQuote: true,
    },
  });
});
