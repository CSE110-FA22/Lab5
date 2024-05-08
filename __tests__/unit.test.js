// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Test cases for isPhoneNumber function
test('isPhoneNumber should return true for valid phone numbers', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber should return false for invalid phone numbers', () => {
  expect(isPhoneNumber('1234')).toBe(false);
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

// Test cases for isEmail function
test('isEmail should return true for valid emails', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user123@gmail.com')).toBe(true);
});

test('isEmail should return false for invalid emails', () => {
  expect(isEmail('test@example')).toBe(false);
  expect(isEmail('user123@gmail')).toBe(false);
});

// Test cases for isStrongPassword function
test('isStrongPassword should return true for strong passwords', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
  expect(isStrongPassword('Pass_word123')).toBe(true);
});

test('isStrongPassword should return false for weak passwords', () => {
  expect(isStrongPassword('wek')).toBe(false);
  expect(isStrongPassword('123')).toBe(false);
});

// Test cases for isDate function
test('isDate should return true for valid dates', () => {
  expect(isDate('12/25/2023')).toBe(true);
  expect(isDate('1/1/2024')).toBe(true);
});

test('isDate should return false for invalid dates', () => {
  expect(isDate('2023/12/25')).toBe(false);
  expect(isDate('25-12-2023')).toBe(false);
});

// Test cases for isHexColor function
test('isHexColor should return true for valid hex colors', () => {
  expect(isHexColor('#123abc')).toBe(true);
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor should return false for invalid hex colors', () => {
  expect(isHexColor('#FFGGHH')).toBe(false); // Corrected assertion
  expect(isHexColor('#F')).toBe(false);
});
