// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber

// True tests
test('verify that each component in the phone number has 3 digts, 3 digits, then 4 digits', () => {
  let phoneNumber = "222-222-2222";
  expect(isPhoneNumber(phoneNumber)).toBe(true);
});

test('allowing parenthesis in the area code section', () => {
  let phoneNumber = "(626)-222-2222";
  expect(isPhoneNumber(phoneNumber)).toBe(true);
});

// False Tests
test('cannot accept characters in the phone number', () => {
  let phoneNumber = "aaa-aaa-aaaa";
  expect(isPhoneNumber(phoneNumber)).toBe(false);
});

test('having no hypens', () => {
  let phoneNumber = "2222222";
  expect(isPhoneNumber(phoneNumber)).toBe(false);
});


// isEmail

// True tests
test('allow any characters before the @ symbol', () => {
  let email = "fsdkfasjkfasdf@gmail.com";
  expect(isEmail(email)).toBe(true);
});

test('having 3 characters after the . is correct', () => {
  let email = "fsdkfasjkfasdf@gmail.com";
  expect(isEmail(email)).toBe(true);
});

// False tests
test('doesnt allow other symbol', () => {
  let email = "123!gmail.com";
  expect(isEmail(email)).toBe(false);
});

test('would fail if there is not the @ symbol', () => {
  let email = "123gmail.com";
  expect(isEmail(email)).toBe(false);
});

// isStrongPassword

test('first character is letter, contains letters, numbers and underscore with length under 15', () => {
  let pass = "A8__29Bsz"
  expect(isStrongPassword(pass)).toBe(true);
});

test('first character is letter, contains numbers, all upper case letters', () => {
  let pass = "A9999BDH"
  expect(isStrongPassword(pass)).toBe(true);
});

// FALSE TESTS
test('length is under 4 characters', () => {
  let pass = "AB"
  expect(isStrongPassword(pass)).toBe(false);
});

test('first letter is not a letter', () => {
  let pass = "90909BHDCD"
  expect(isStrongPassword(pass)).toBe(false);
});

// isDate

test('date with two digit month', () => {
  let date = "01/12/2021"
  expect(isDate(date)).toBe(true);
});

test('date with one digit month', () => {
  let date = "3/21/2009"
  expect(isDate(date)).toBe(true);
});


// FALSE TESTS
test('year is only 2 digits long', () => {
  let date = "03 / 21 / 09"
  expect(isDate(date)).toBe(false);
});

test('not in correct format', () => {
  let date = "03-21-2009"
  expect(isDate(date)).toBe(false);
});

// isHexColor

test('six digit hex color', () => {
  let hexColor = "#1a2b3c"
  expect(isHexColor(hexColor)).toBe(true);
});

test('three digit hex color', () => {
  let hexColor = "789"
  expect(isHexColor(hexColor)).toBe(true);
});

// FALSE TESTS
test('color digits not in range of alphabet of hex color', () => {
  let hexColor = "#GHIJKL"
  expect(isHexColor(hexColor)).toBe(false);
});

test('four digit hex color, which is wrong', () => {
  let hexColor = "#1234"
  expect(isHexColor(hexColor)).toBe(false);
});