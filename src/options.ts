import type {
  BooleanSupportOption,
  ParserOptions,
  SupportOptions,
} from 'prettier';

const preserveTrailingWhitespace: BooleanSupportOption = {
  category: 'Format',
  description: 'Preserve trailing whitespace in the `hbs` template',
  default: false,
  type: 'boolean',
};

export const options: SupportOptions = {
  preserveTrailingWhitespace,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PluginOptions<T = any> extends ParserOptions<T> {
  preserveTrailingWhitespace?: boolean;
}
