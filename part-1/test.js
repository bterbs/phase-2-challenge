const expect = require('chai').expect;
const {weekday, snippet, numProps, filterBetween } = require('./functions.js');

describe('weekday()', () => {
  it('should be a function', () => {
    expect(weekday).to.be.a('function');
  });
});
