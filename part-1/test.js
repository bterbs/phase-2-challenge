const expect = require('chai').expect;
const { weekday, snippet, numProps, filterBetween } = require('./functions.js');

// 10: A test using expected/valid inputs for the weekday() function is written in tests.js.
// 10: A test using unexpected/invalid inputs for the weekday() function is written in tests.js.

describe('weekday()', () => {
  it('returns correct day with valid input', () => {
    const date = new Date(2017, 9, 10);
    expect(weekday(date)).to.equal('Tue');
  });
  it('returns undefined with invalid/unexpected input', () => {
    const date = 'today';
    expect(weekday(date)).to.equal(undefined);
  });
});

describe('snippet()', () => {
  it('returns expected snippet with valid input', () => {
    expect(snippet('Hello, world!', 20)).to.equal('Hello, world!');
  });
  it('throws an error with invalid/unexpected input', () => {
    expect(function(){
      snippet(3, 0);
    }).to.throw('string.slice is not a function');
  });
});

describe('numProps()', () => {
  it('returns correct number of properties with valid input', () => {
    let pet = {
      name: 'Kitty',
      age: 1,
      species: 'cat',
      phone: '555-555-5555'
    };
    expect(numProps(pet)).to.equal(4);
  });
  it('returns error with invalid/unexpected input, like strings', () => {
    expect(function(){
      numProps('pizza');
    }).to.throw(Error);
  });
});

describe('filterBetween()', () => {
  it('returns expected number of elements', () => {
    let arr = [5, 10, 15, 20, 25, 30, 35];
    let testResults = filterBetween(arr, 15, 34);
    expect(testResults.length).to.equal(4);
  });
  it('throws error if arr passed includes strings', () => {
    let arr = ['dog', 'cat', 'bird']
    expect(function(){
      filterBetween(arr, 0, 100);
    }).to.throw(Error);
  });
});
