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
    await render<TestContext>(
      hbs`
        <Hello data-test-message @name={{this.name}} @age={{30}} />
      `,
    );
  });

  test('it renders (2)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello @age={{30}} data-test-message @name={{this.name}} />
      `,
    );
  });

  test('it renders (3)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <Hello @name={{this.name}} @age={{30}} data-test-message />
    `);
  });

  test('it renders (4)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello @age={{30}} @name={{this.name}} data-test-message />
      `,
    );
  });

  test('it renders (5)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello @age={{30}} @name={{this.name}} data-test-message />
      `,
    );
  });

  test('it renders (6)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello
          @age={{30}}
          @name={{concat "Zoey" this.someSeparator "von Ember"}}
          data-test-message=""
        />
      `,
    );
  });

  test('it renders (7)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Hello
          @age={{30}}
          {{! @glint-expect-error }}
          @name={{hash first="Zoey" last="von Ember"}}
          data-test-message
        />
      `,
    );
  });

  test('it renders (8)', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          data-test-message
          @name={{this.name}}
          @age={{30}}
        />
      `,
    );
  });

  test('it renders (9)', async function (this: TestContext, assert) {
    await render<TestContext>(hbs`
      <Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        @name={{this.name}}
        data-test-message
        @age={{30}}
      />
    `);
  });
});
