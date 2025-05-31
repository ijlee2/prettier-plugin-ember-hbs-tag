import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  name: string;
}

module('Integration | Component | hello', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.name = 'Zoey';
  });

  test('it renders (1)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs``);

    assert.ok(true);
  });

  test('it renders (2)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs``);

    assert.ok(true);
  });

  test('it renders (3)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs``);

    assert.ok(true);
  });

  test('it renders (4)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs``);
    assert.ok(true);
  });

  test('it renders (5)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        .
      `,
    );

    assert.ok(true);
  });

  test('it renders (6)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        Hello {{this.name}}!
      `,
    );

    assert.ok(true);
  });

  test('it renders (7)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        Hello {{this.name}}!
      `,
    );

    assert.ok(true);
  });

  test('it renders (8)', async function (this: TestContext, assert) {
    const aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa =
      render;

    await aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<TestContext>(
      hbs``,
    );

    assert.ok(true);
  });

  test('it renders (9)', async function (this: TestContext, assert) {
    const aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa =
      render;

    await aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<TestContext>(
      hbs`
        Hello {{this.name}}!
      `,
    );

    assert.ok(true);
  });

  test('it renders (10)', async function (this: TestContext, assert) {
    const a = hbs;

    await render<TestContext>(a`Hello {{this.name}}!`);

    assert.ok(true);
  });
});
