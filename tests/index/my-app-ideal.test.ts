import { test } from '@codemod-utils/tests';

import { runPrettier } from '../helpers/index.js';

test('index > my-app-ideal', async function () {
  await runPrettier({
    fixturePath: 'index/my-app-ideal',
  });

  // Check idempotence
  await runPrettier({
    fixturePath: 'index/my-app-ideal',
  });
});
