// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Phone test 1', () => {
  expect(isPhoneNumber("11")).toBe(false);
});

test('Phone test 2', () => {
  expect(isPhoneNumber("111-222-3333")).toBe(true);
});

test('Phone test 3', () => {
  expect(isPhoneNumber("111-bbb-3333")).toBe(false);
});

test('Phone test 4', () => {
  expect(isPhoneNumber("1-111-222-3333")).toBe(true);
});


test('Email test 1', () => {
  expect(isEmail("teststring")).toBe(false);
});

test('Email test 2', () => {
  expect(isEmail("testring@domain.com")).toBe(true);
});

test('Email test 3', () => {
  expect(isEmail("testring@domain@com")).toBe(false);
});

test('Email test 4', () => {
  expect(isEmail("teststring@YIPPEE.com")).toBe(true);
});

test('Password test 1', () => {
  expect(isStrongPassword("a2&")).toBe(false);
});

test('Password test 2', () => {
  expect(isStrongPassword("a1234ZB")).toBe(true);
});

test('Password test 3', () => {
  expect(isStrongPassword("12345678910111131415")).toBe(false);
});

test('Password test 4', () => {
  expect(isStrongPassword("Z124z_")).toBe(true);
});

test('Date test 1', () => {
  expect(isDate("12/14/22")).toBe(false);
});

test('Date test 2', () => {
  expect(isDate("05/21/2024")).toBe(true);
});

test('Date test 3', () => {
  expect(isDate("15/Si/erra")).toBe(false);
});

test('Date test 4', () => {
  expect(isDate("00/00/0000")).toBe(true);
});

test('Hex test 1', () => {
  expect(isHexColor("AABBCCDD")).toBe(false);
});

test('Hex test 2', () => {
  expect(isHexColor("A1B1C1")).toBe(true);
});

test('Hex test 3', () => {
  expect(isHexColor("G1H1J1")).toBe(false);
});

test('Hex test 4', () => {
  expect(isHexColor("1BC")).toBe(true);
});

