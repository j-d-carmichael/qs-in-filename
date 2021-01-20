# qs-in-filename

Parse a query string from within a filename or write a query string object into a string to be injected into a filename.

## Parse
From the unit tests:
```js
import { parser } from 'qs-in-filename';

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
```

## Generate
From the unit tests:
```js
import { generator } from 'qs-in-filename';

it('Should return array via comma separator', async () => {
  const object = {
    r: '1.25',
    c: ['123654', '456321'],
  };
  expect(generator(object)).toBe('~r=1.25&c=123654,456321~');
});
```

## Options

The default separator is a ~. The separator encases the qs object.

You can change this from a ~ to anything you like eg:

```
parse(object, { separator: '--' })
```

```
generator(object, { separator: '--' })
```

