// unit.test.js
import { sum } from '../code-to-unit-test/sum';
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is a phone #  true', () => {
  expect(isPhoneNumber('345-456-6789')).toBe(true);
});
test('is a phone #  true', () => {
  expect(isPhoneNumber('111-111-2222')).toBe(true);
});
test('is a phone #  false', () => {
  expect(isPhoneNumber('9999999999')).toBe(false);
});
test('is a phone #  false', () => {
  expect(isPhoneNumber('hehe')).toBe(false);
});

test('is an email  true', () => {
  expect(isEmail('stuff@gmail.com')).toBe(true);
});
test('is an email  true', () => {
  expect(isEmail('people@outlook.com')).toBe(true);
});
test('is an email false', () => {
  expect(isEmail('345-456-6789')).toBe(false);
});
test('is an email false', () => {
  expect(isEmail('fdsfdsfsdfsdfs')).toBe(false);
});


/**
 * The password's first character must be a letter,
 *  it must contain at least * 4 characters and no more than 
 * 15 characters and no characters other than * * letters,
 *  numbers and the underscore may be used
 */
test('is strong password true', () => {
  expect(isStrongPassword('xyz_3456')).toBe(true);
});
test('is strong password true2', () => {
  expect(isStrongPassword('Car2')).toBe(true);
});
test('is strong password false', () => {
  expect(isStrongPassword('3')).toBe(false);
});
test('is strong password false2', () => {
  expect(isStrongPassword('xyz')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('is date true', () => {
  expect(isDate('06/12/2005')).toBe(true);
});
test('is date true', () => {
  expect(isDate('12/14/1800')).toBe(true);
});
test('is date false', () => {
  expect(isDate('2005/06/12')).toBe(false);
});
test('is date false', () => {
  expect(isDate('sdffsdfsdf')).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('is hex color true', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});
test('is hex color true', () => {
  expect(isHexColor('#ff1000')).toBe(true);
});
test('is hex false', () => {
  expect(isHexColor('red')).toBe(false);
});
test('is hex false2', () => {
  expect(isHexColor('#f0')).toBe(false);
});