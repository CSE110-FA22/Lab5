// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
test("valid phone -", () => {
  expect(isPhoneNumber("888-999-1231")).toBe(true);
});

test("valid phone ()", () => {
  expect(isPhoneNumber("(123) 999-1231")).toBe(true);
});

test("fail phone", () => {
  expect(isPhoneNumber("8889991231")).toBe(false);
});

test("fail phone", () => {
  expect(isPhoneNumber("A")).toBe(false);
});

test("valid email", () => {
  expect(isEmail("gdf@gas.edu")).toBe(true);
});

test("valid email", () => {
  expect(isEmail("123@gas.com")).toBe(true);
});

test("invalid email", () => {
  expect(isEmail("gdf@.edu")).toBe(false);
});

test("invalid email", () => {
  expect(isEmail("123gas.com")).toBe(false);
});

test("valid strong password", () => {
  expect(isStrongPassword("asdf12HsdfBsd")).toBe(true);
});

test("valid strong password", () => {
  expect(isStrongPassword("a1234BASbas")).toBe(true);
});

test("invalid strong password", () => {
  expect(isStrongPassword("1234BASbas")).toBe(false);
});
test("invalid strong password", () => {
  expect(isStrongPassword("asdf12H-s*()dfBsd")).toBe(false);
});

test("valid date", () => {
  expect(isDate("04/23/2022")).toBe(true);
});
test("valid date", () => {
  expect(isDate("02/32/2002")).toBe(true);
});
test("invalid date", () => {
  expect(isDate("04-23-2022")).toBe(false);
});

test("invalid date", () => {
  expect(isDate("2002/02/01/")).toBe(false);
});

test("valid hex color", () => {
  expect(isHexColor("123212")).toBe(true);
});
test("valid hex color", () => {
  expect(isHexColor("FFFFFF")).toBe(true);
});

test("invalid hex color", () => {
  expect(isHexColor("FFFGFF")).toBe(false);
});
test("invalid hex color", () => {
  expect(isHexColor("12302")).toBe(false);
});
