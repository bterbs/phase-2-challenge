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
