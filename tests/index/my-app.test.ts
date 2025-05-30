import { test } from '@codemod-utils/tests';

import { runPrettier } from '../helpers/index.js';

test('index > my-app', async function () {
  await runPrettier({
    fixturePath: 'index/my-app',
  });

  // Check idempotence
  await runPrettier({
    fixturePath: 'index/my-app',
  });
});
