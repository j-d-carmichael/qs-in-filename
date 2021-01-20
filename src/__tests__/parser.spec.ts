import { parser } from '../index';

it('should return an empty object', async () => {
  const filename = 'filename.png';
  expect(parser(filename)).toEqual({});
});

it('return an object without array values', async () => {
  const filename = 'filename~r=1.66&c=123456~.png';
  expect(parser(filename)).toEqual({
    'r': '1.66',
    'c': '123456'
  });
});

it('return an object without array values', async () => {
  const filename = 'filename--r=1.66&c=123456--.png';
  expect(parser(filename, { separator: '--' })).toEqual({
    'r': '1.66',
    'c': '123456'
  });
});

it('return an object with array value', async () => {
  const filename = 'filename~r=1.66&c=123456,654951~.png';
  expect(parser(filename)).toEqual({
    'r': '1.66',
    'c': [
      '123456',
      '654951'
    ]
  });
});
