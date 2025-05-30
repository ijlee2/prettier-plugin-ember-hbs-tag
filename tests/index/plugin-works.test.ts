import { assert, test } from '@codemod-utils/tests';

import { formatFile } from '../helpers/index.js';

test('index > plugin works', async function () {
  const oldFile = [
    `module('Integration | Component | hello', function (hooks) {`,
    `  setupRenderingTest(hooks);`,
    `  `,
    `  hooks.beforeEach(function (this: TestContext) {`,
    `    this.name = 'Zoey';`,
    `  });`,
    `  `,
    `  test('it renders', async function (this: TestContext, assert) {`,
    `    await render<TestContext>(hbs\``,
    `      <Hello`,
    `        @name={{this.name}}`,
    `      />`,
    `    \`);`,
    `  });`,
    `});`,
  ].join('\n');

  const newFile = await formatFile(oldFile);

  assert.strictEqual(
    newFile,
    [
      `module('Integration | Component | hello', function (hooks) {`,
      `  setupRenderingTest(hooks);`,
      ``,
      `  hooks.beforeEach(function (this: TestContext) {`,
      `    this.name = 'Zoey';`,
      `  });`,
      ``,
      `  test('it renders', async function (this: TestContext, assert) {`,
      `    await render<TestContext>(hbs\``,
      `      <Hello @name={{this.name}} />`,
      `    \`);`,
      `  });`,
      `});`,
      ``,
    ].join('\n'),
  );
});
