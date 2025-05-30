import { test } from '@codemod-utils/tests';

import { runPrettier } from '../helpers/shared-test-setups/index/my-app.js';

test('index > my-app', async function () {
  await runPrettier();

  // Check idempotence
  await runPrettier();
});
