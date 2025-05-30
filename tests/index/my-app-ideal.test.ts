import { test } from '@codemod-utils/tests';

import { runPrettier } from '../helpers/shared-test-setups/index/my-app-ideal.js';

test('index > my-app-ideal', async function () {
  await runPrettier();

  // Check idempotence
  await runPrettier();
});
