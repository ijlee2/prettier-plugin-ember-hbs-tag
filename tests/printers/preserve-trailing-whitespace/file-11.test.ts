import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/preserve-trailing-whitespace.js';

test('printers > preserve-trailing-whitespace > file-11', async function () {
  await runPrettier('file-11.js');
});
