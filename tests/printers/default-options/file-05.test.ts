import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/default-options.js';

test('printers > default-options > file-05', async function () {
  await runPrettier('file-05.ts');
});
