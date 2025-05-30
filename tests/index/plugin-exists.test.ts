import { assert, test } from '@codemod-utils/tests';

import plugin from '../../src/index.js';

test('index > plugin exists', function () {
  assert.ok(plugin);
});
