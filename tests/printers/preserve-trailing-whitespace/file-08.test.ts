import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/preserve-trailing-whitespace.js';

test('printers > preserve-trailing-whitespace > file-08', async function () {
  await runPrettier('file-08.ts');
});
