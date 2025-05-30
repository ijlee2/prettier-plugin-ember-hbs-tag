import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/default-options.js';

test('printers > default-options > file-06', async function () {
  await runPrettier('file-06.ts');
});
