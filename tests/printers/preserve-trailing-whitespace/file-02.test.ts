import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/preserve-trailing-whitespace.js';

test('printers > preserve-trailing-whitespace > file-02', async function () {
  await runPrettier('file-02.ts');
});
