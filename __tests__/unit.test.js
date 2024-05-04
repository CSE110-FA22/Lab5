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
test("(xxx) xxx-xxxx will have to return true", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("Not using parentheses for the same number will have to return true", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("empty will have to return false", () => {
  expect(isPhoneNumber("")).toBe(false);
});

test("A string of non numbers will have to return false", () => {
  expect(isPhoneNumber("Toilet")).toBe(false);
});

// isEmail
test("Usual email address will return true", () => {
  expect(isEmail("abcde@gmail.com")).toBe(true);
});

test("Non gmail or com email address will return true", () => {
  expect(isEmail("gaming@idk.co")).toBe(true);
});

test("If the email address has no domain, it will return false", () => {
  expect(isEmail("about.com")).toBe(false);
});

test("if the TLD is not within [2,3] it will return false", () => {
  expect(isEmail("wowowowowowo@test.commmmmm")).toBe(false);
});

// isStrongPassword
test("Password will return true", () => {
  expect(isStrongPassword("Password")).toBe(true);
});

test("G123 will return true", () => {
  expect(isStrongPassword("G123")).toBe(true);
});

test("Empty will return false", () => {
  expect(isStrongPassword("")).toBe(false);
});

test("A will return false", () => {
  expect(isStrongPassword("A")).toBe(false);
});

// isDate
test("March 11th 2004 (11/03/2004) will return true", () => {
  expect(isDate("11/03/2004")).toBe(true);
});

test("5/4/2024 with the month and day being 1 digit will return true", () => {
  expect(isDate("5/4/2004")).toBe(true);
});

test("Empty string will return false", () => {
  expect(isDate("")).toBe(false);
});

test("// will return false", () => {
  expect(isDate("//")).toBe(false);
});

// isHexColor

test("#FFFFFF will return true", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test("fff without #, lower case, and only 3 digits will return true", () => {
  expect(isHexColor("fff")).toBe(true);
});

test("Non hex letters will return false", () => {
  expect(isHexColor("#gaming")).toBe(false);
});

test("4 letter words will return true", () => {
  expect(isHexColor("#F069")).toBe(false);
});