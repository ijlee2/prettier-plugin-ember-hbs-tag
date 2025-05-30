import { test } from '@codemod-utils/tests';

import { runPrettier } from '../../helpers/shared-test-setups/printers/default-options.js';

test('printers > default-options > file-07', async function () {
  await runPrettier('file-07.ts');
});
