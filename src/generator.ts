import { ParserOptions } from './ParserOptions';

export const generator = (
  object: Record<string, any>,
  parserOptions?: ParserOptions
): string => {
  const separator = parserOptions?.separator || '~';
  return separator + decodeURIComponent(new URLSearchParams(object).toString()) + separator;
};
