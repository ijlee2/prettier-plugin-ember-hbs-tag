import type { ParserOptions, SupportOptions } from 'prettier';

export const options: SupportOptions = {};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any
export interface PluginOptions<T = any> extends ParserOptions<T> {}
