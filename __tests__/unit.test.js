// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('test isPhoneNumber: 831-250-3633', () => {
  expect(isPhoneNumber("831-250-3633")).toBe(true);
});

test('test isPhoneNumber (831) 250-3633', () => {
  expect(isPhoneNumber("(831) 250-3633")).toBe(true);
});

test('test isPhoneNumber: 831250-363', () => {
  expect(isPhoneNumber("831250-363")).toBe(false);
});

test('test isPhoneNumber 831250363', () => {
  expect(isPhoneNumber("8312503633")).toBe(false);
});

test('test isEmail: raw@gmail.com',() =>{
  expect(isEmail("raw@gmail.com")).toBe(true);
});

test('test isEmail: a@yahoo.net',() =>{
  expect(isEmail("a@yahoo.net")).toBe(true);
});

test('test isEmail: @yahoo.net',() =>{
  expect(isEmail("@yahoo.net")).toBe(false);
});

test('test isEmail: hellogmail.com',() =>{
  expect(isEmail("hellogmail.com")).toBe(false);
});

test('test isStrongPassword:YEAYUH',() =>{
  expect(isStrongPassword("YEAYUH")).toBe(true);
});

test('test isStrongPassword: OOOYEAH123',() =>{
  expect(isStrongPassword("OOOYEAH123")).toBe(true);
});

test('test isStrongPassword: a',() =>{
  expect(isStrongPassword("a")).toBe(false);
});

test('test isStrongPassword:12',() =>{
  expect(isStrongPassword("12")).toBe(false);
});

test('test isDate: 01/01/2001',() =>{
  expect(isDate("01/01/2001")).toBe(true);
});

test('test isDate: 1/1/2001',() =>{
  expect(isDate("1/1/2001")).toBe(true);
});

test('test isDate: 01/01/01',() =>{
  expect(isDate("01/01/01")).toBe(false);
});

test('test isDate: /01/2001',() =>{
  expect(isDate("/01/2001")).toBe(false);
});

test('test isHexColor:#123',() =>{
  expect(isHexColor("#123")).toBe(true);
});

test('test isHexColor:112233',() =>{
  expect(isHexColor("112233")).toBe(true);
});

test('test isHexColor:23',() =>{
  expect(isHexColor("23")).toBe(false);
});

test('test isHexColor:#1231234',() =>{
  expect(isHexColor("#1231234")).toBe(false);
});