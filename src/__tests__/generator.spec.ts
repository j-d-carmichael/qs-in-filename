import { generator } from '../index';

it('Should return basic key value', async () => {
  const object = {
    r: '1.25',
    c: '123654',
  };
  expect(generator(object)).toBe('~r=1.25&c=123654~');
});

it('Should return basic key value', async () => {
  const object = {
    r: '1.25',
    c: '123654',
  };
  expect(generator(object, {separator: '--'})).toBe('--r=1.25&c=123654--');
});


it('Should return array via comma separator', async () => {
  const object = {
    r: '1.25',
    c: ['123654', '456321'],
  };
  expect(generator(object)).toBe('~r=1.25&c=123654,456321~');
});
