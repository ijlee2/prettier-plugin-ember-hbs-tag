import { hbs } from 'ember-cli-htmlbars';

export const Default1 = {
  render: (args) => {
    return {
      context: args,
      template: hbs`<Hello />`,
    };
  },
};

export const Default2 = {
  render: (args) => {
    return {
      context: args,
      template: hbs`
        <Hello />
      `,
    };
  },
};

export const Default3 = {
  render: (args) => {
    return {
      context: args,
      template: hbs`<Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa />`,
    };
  },
};

export const Default4 = {
  render: (args) => {
    return {
      context: args,
      template: hbs`
        <Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa />
      `,
    };
  },
};

export const Default5 = {
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: (args) => {
    return {
      context: args,
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: hbs`
        <Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        />
      `,
    };
  },
};

export const WithArguments1 = {
  args: {
    name: 'Zoey',
  },
  argTypes: {
    name: { control: 'text' },
  },
  render: (args) => {
    return {
      context: args,
      template: hbs`<Hello @name={{this.name}} />`,
    };
  },
};

export const WithArguments2 = {
  args: {
    name: 'Zoey',
  },
  argTypes: {
    name: { control: 'text' },
  },
  render: (args) => {
    return {
      context: args,
      template: hbs`

        <Hello @name={{this.name}} />

      `,
    };
  },
};

export const WithArguments3 = {
  args: {
    name: 'Zoey',
  },
  argTypes: {
    name: { control: 'text' },
  },
  render: (args) => {
    return {
      context: args,
      template: hbs`
        <Hello
          @name={{this.name}}
        />
      `,
    };
  },
};

export const WithArguments4 = {
  args: {
    name: 'Zoey',
  },
  argTypes: {
    name: { control: 'text' },
  },
  render: (args) => {
    return {
      context: args,
      template: hbs`<Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa @name={{this.name}} />`,
    };
  },
};
