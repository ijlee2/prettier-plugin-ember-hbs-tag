[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/prettier-plugin-ember-hbs-tag/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/prettier-plugin-ember-hbs-tag/actions/workflows/ci.yml)

# prettier-plugin-ember-hbs-tag

_Prettier plugin to format `hbs` tags_

1. [Why use this package?](#why-use-this-package)
1. [Installation](#installation)
    - [Plugin options](#plugin-options)
1. [Compatibility](#compatibility)
1. [Contributing](#contributing)
1. [License](#license)


## Why use this package?

Until now, Ember developers had to use [`ember-template-lint-plugin-prettier`](https://github.com/ember-template-lint/ember-template-lint-plugin-prettier) to format their `*.hbs` files. This is a bit strange, because Prettier natively supports Handlebars since May 2021.

The plugin also comes with a few issues:

- It uglifies code inside an `hbs` tag (i.e. wrong indentations in rendering tests, Storybook stories).
- It needs to dynamically load `prettier` and use a hook from `ember-template-lint` to format `*.hbs`. Due to strong coupling, it will fall behind if `prettier` or `ember-template-lint` makes a breaking change to their API.
- Prettier recommends not running `prettier` through a linter plugin. In January 2025, Ember CLI removed `eslint-plugin-prettier` and `stylelint-prettier` from its blueprints, in order to separate formatting and linting.

In short, what we're missing is a Prettier plugin to format `hbs` tags.

> [!TIP]
> 
> Use [`prettier-plugin-ember-template-tag`](https://github.com/ember-tooling/prettier-plugin-ember-template-tag/) to format `<template>` tags. You can find out below how to set up both plugins.


## Installation

1. In `package.json`, replace `ember-template-lint-plugin-prettier` with `prettier-plugin-ember-hbs-tag`.

    <details>

    <summary><code>package.json</code></summary>

    `eslint-plugin-prettier` and `stylelint-prettier` are assumed to have been removed already. For more details, please see [my blog post](https://crunchingnumbers.live/2025/06/01/its-time-to-separate-lint-and-format/).

    ```diff
    {
      "devDependencies": {
        "ember-template-lint": "...",
    -     "ember-template-lint-plugin-prettier": "...",
        "prettier": "...",
    +     "prettier-plugin-ember-hbs-tag": "...",
        "prettier-plugin-ember-template-tag": "..."
      }
    }
    ```

    </details>

1. Remove `ember-template-lint-plugin-prettier` from the `ember-template-lint` configuration.

    <details>

    <summary><code>.template-lintrc.cjs</code></summary>

    ```diff
    'use strict';

    module.exports = {
    -   plugins: ['ember-template-lint-plugin-prettier'],
    -   extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],
    -   overrides: [
    -     {
    -       files: ['**/*.{gjs,gts}'],
    -       rules: {
    -         prettier: 'off',
    -       },
    -     },
    -     {
    -       files: ['tests/**/*-test.{js,ts}'],
    -       rules: {
    -         prettier: 'off',
    -       },
    -     },
    -   ],
    +   extends: ['recommended'],
    };
    ```

    </details>

1. Add `prettier-plugin-ember-hbs-tag` to the `prettier` configuration.

    <details>

    <summary><code>prettier.config.mjs</code></summary>

    Prettier's default parser for `*.{js,ts}` is `'babel'`. To format `*.{js,ts}` with an `hbs` tag, set the parser to `'ember-hbs-tag'`.

    ```js
    export default {
      plugins: [
        'prettier-plugin-ember-hbs-tag',
        'prettier-plugin-ember-template-tag',
      ],
      overrides: [
        {
          files: ['*.{cjs,cts,js,mjs,mts,ts}'],
          options: {
            singleQuote: true,
          },
        },
        {
          files: ['tests/**/*-test.{js,ts}'],
          options: {
            parser: 'ember-hbs-tag',
            singleQuote: true,
            templateSingleQuote: false,
          },
        },
        {
          files: ['*.{gjs,gts}'],
          options: {
            singleQuote: true,
            templateSingleQuote: false,
          },
        },
        {
          files: ['*.hbs'],
          options: {
            printWidth: 64,
            singleQuote: false,
          },
        },
      ],
    };
    ```

    </details>

1. Finally, run `install` to update your project dependencies. Run `lint` and `lint:fix` to check that `hbs` tags can be formatted.


### Plugin options

<details>

<summary><code>preserveTrailingWhitespace</code></summary>

By default, the plugin aims for prettiness.

If you need the trailing whitespace to remain unchanged (e.g. in tests), set `preserveTrailingWhitespace` to `true`.

```diff
/* prettier.config.mjs */
export default {
  overrides: [
    {
      files: ['tests/**/*-test.{js,ts}'],
      options: {
        parser: 'ember-hbs-tag',
+         preserveTrailingWhitespace: true,
      },
    },
  ],
};
```

</details>

<details>

<summary><code>templateSingleQuote</code></summary>

By default, Prettier uses single quotes in `*.{js,ts}`, and the plugin uses the global value of `singleQuote` to decide whether to use single or double quotes in templates.

However, you will most likely want double quotes for templates. So set `templateSingleQuote` to `false`, just like you did it for `prettier-plugin-ember-template-tag`.

```diff
/* prettier.config.mjs */
export default {
  overrides: [
    {
      files: ['tests/**/*-test.{js,ts}'],
      options: {
        parser: 'ember-hbs-tag',
+         templateSingleQuote: false,
      },
    },
  ],
};
```

</details>


## Compatibility

- Prettier v3
- Node.js v20 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
