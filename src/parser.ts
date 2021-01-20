import { ParserOptions } from './ParserOptions';

export const parser = (fileName: string, options?: ParserOptions): Record<string, string | string[]> => {
  const response: Record<string, string | string[]> = {};
  const qsString = fileName.split(options?.separator || '~');
  if (qsString.length >= 3) {
    new URLSearchParams(qsString[1]).forEach((value: string, key: string) => {
      response[key] = value.includes(',') ? value.split(',') : value;
    });
  }
  return response;
};
