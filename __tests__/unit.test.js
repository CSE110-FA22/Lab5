// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber Tests', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('123456(7890)')).toBe(false);
});

test('isEmail Tests', () => {
  expect(isEmail('gamer@gamer.com')).toBe(true);
  expect(isEmail('thomas@powell.pow')).toBe(true);
  expect(isEmail('gamer@gamer.gamer')).toBe(false);
  expect(isEmail('bongocat')).toBe(false);
});

test('isStrongPassword Tests', () => {
  expect(isStrongPassword('amy123_')).toBe(true);
  expect(isStrongPassword('Powinator55')).toBe(true);
  expect(isStrongPassword('123$')).toBe(false);
  expect(isStrongPassword('bongos$')).toBe(false);
});

test('isDate Tests', () => {
  expect(isDate('1/2/2002')).toBe(true);
  expect(isDate('12/24/2002')).toBe(true);
  expect(isDate('1/2/02')).toBe(false);
  expect(isDate('1-2-2002')).toBe(false);
});

test('isHexColor Tests', () => {
  expect(isHexColor('#0f0')).toBe(true);
  expect(isHexColor('00ff00')).toBe(true);
  expect(isHexColor('00')).toBe(false);
  expect(isHexColor('#00ff005')).toBe(false);
});