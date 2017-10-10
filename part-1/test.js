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

describe('weekday()', () => {
  it('returns expected day with valid input', () => {
    const date = new Date(2017, 9, 10);
    expect(weekday(date)).to.equal('Tue');
  });
  it('returns undefined with invalid/unexpected input', () => {
    const date = 'today';
    expect(weekday(date)).to.equal(undefined);
  });
});