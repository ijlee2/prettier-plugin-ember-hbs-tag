import { assert, test } from '@codemod-utils/tests';

import { languages, options, parsers, printers } from '../../src/index.js';

test('index > plugin exists', function () {
  assert.ok(languages);
  assert.ok(options);
  assert.ok(parsers);
  assert.ok(printers);
});
