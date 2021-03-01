// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { splitStringToArray } = require('./split_string');

test('should return ["Hello", "World!"] when str="Hello World!" and delimiter = " "', () => {
  expect(splitStringToArray('Hello World!', ' ')).toEqual(['Hello', 'World!']);
});

test('should return [] when str="" and delimiter = " "', () => {
  expect(splitStringToArray('', ' ')).toEqual(['']);
});

test('should return ["CIS 171"] when str="CIS 171" and delimiter = ","', () => {
  expect(splitStringToArray('CIS 171', ',')).toEqual(['CIS 171']);
});

test('should return ["Bla", "la", "la"] when str="Bla bla bla" and delimiter = " b"', () => {
  expect(splitStringToArray('Bla bla bla', ' b')).toEqual(["Bla", "la", "la"]);
});
