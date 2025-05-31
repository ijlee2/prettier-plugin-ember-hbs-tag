import { render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | hello', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders (1)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello />
      `,
    );
  });

  test('it renders (2)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello />
      `,
    );
  });

  test('it renders (3)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <Hello />
    `);
  });

  test('it renders (4)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <Hello />
    `);
  });

  test('it renders (5)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <Hello />
    `);
  });

  test('it renders (6)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello />
      `,
    );
  });

  test('it renders (7)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello />
      `,
    );
  });

  test('it renders (8)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        />
      `,
    );
  });

  test('it renders (9)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      />
    `);
  });
});
