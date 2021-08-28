import orderByProps from '../index.js';

/*
correct data
*/

test('should return sorted arr (1prop)', () => {
  const inputObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputProps = ['defence'];
  const expectedOutput = [
    { key: 'defence', value: 40 },

    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const actualOutput = orderByProps(inputObj, inputProps);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

test('should return sorted arr (2props)', () => {
  const inputObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputProps = ['name', 'level'];
  const expectedOutput = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },

    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const actualOutput = orderByProps(inputObj, inputProps);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

test('should return sorted arr (3props)', () => {
  const inputObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputProps = ['name', 'level', 'defence'];
  const expectedOutput = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },

    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
  ];

  const actualOutput = orderByProps(inputObj, inputProps);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

test('should return sorted arr (0prop)', () => {
  const inputObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputProps = [];
  const expectedOutput = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const actualOutput = orderByProps(inputObj, inputProps);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

/*
incorrect data
*/
test('should return sorted arr (no props array)', () => {
  const inputObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expectedOutput = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },

    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },

  ];

  const actualOutput = orderByProps(inputObj);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

test('should return empty arr (given empty obj)', () => {
  const inputObj = {};
  const expectedOutput = [{}];

  const actualOutput = orderByProps(inputObj);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

test('should return empty arr (given: empty obj, empty props)', () => {
  const inputObj = {};
  const inputProps = [];
  const expectedOutput = [{}];

  const actualOutput = orderByProps(inputObj, inputProps);

  expect(actualOutput).toStrictEqual(expectedOutput);
});

test('should return empty arr (no args)', () => {
  const expectedOutput = [{}];

  const actualOutput = orderByProps();

  expect(actualOutput).toStrictEqual(expectedOutput);
});
