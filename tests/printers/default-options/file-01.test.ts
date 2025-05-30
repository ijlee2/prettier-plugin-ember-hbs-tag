import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/default-options.js';

test('printers > default-options > file-01', async function () {
  await runPrettier('file-01.ts');
});
