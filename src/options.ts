import type {
  BooleanSupportOption,
  ParserOptions,
  SupportOptions,
} from 'prettier';

const preserveTrailingWhitespace: BooleanSupportOption = {
  category: 'Format',
  default: false,
  description: 'Preserve trailing whitespace in the `hbs` template.',
  type: 'boolean',
};

const templateSingleQuote: BooleanSupportOption = {
  category: 'Format',
  description: 'Use single quotes instead of double in the `hbs` template.',
  type: 'boolean',
};

export const options: SupportOptions = {
  preserveTrailingWhitespace,
  templateSingleQuote,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PluginOptions<T = any> extends ParserOptions<T> {
  preserveTrailingWhitespace?: boolean;
  templateSingleQuote?: boolean;
}
