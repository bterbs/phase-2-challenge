// Show a weekday
// Write a function weekday(date) to find the weekday for a given Date object,
// returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
const weekday = (date) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// check to see if date argument object's class is an instance of Date, then call .getDay
// and return daysOfWeek day at that index.
  if (Object.prototype.toString.call(date) === "[object Date]") {
    return daysOfWeek[date.getDay()];
  };
  throw new Error('You entered an invalid date! Try again.');
};

// console.log(weekday('today'));
console.log(weekday(new Date(2017, 5, 19)));

// Get a snippet from text
// Write a function snippet(string, maxlength) that shortens the string given to the maxlength
// and adds the ellipsis character ("…") to the end of string, and then returns the shortened
// string. If the string is shorter than the maxlength, just return the string unmodified.

const snippet = (string, maxlength) => {
  if (string.length < maxlength) {
    return string;
  } else {
  return `${string.slice(0, maxlength)}...`;
  }
};

console.log(snippet('For the following exercises,', 10));

// Number of properties
// Write a function numProps(obj) that returns the number of properties an object has.
// Ignore symbolic properties and count only the "own properties" (not inherited) of the
// object.
const numProps = (obj) => {
  if (typeof obj === 'object') {
    const objectKeys = Object.keys(obj);
    return objectKeys.length;
  }
  throw new Error('numProps must be passed an object');
};

console.log(numProps({}));

// Filter between
// Write a function filterBetween(array, min, max) that takes an array of numbers,
// a min value, and a max value. It returns a new array containing only the elements that
// are greater than or equal to min and less than or equal to max.
const filterBetween = (arr, min, max) => {
// first will check input to make sure arguments only contain numbers.
  arr.forEach((element) => {
    if (typeof (element) !== 'number') {
      throw new Error('whoops! check that array passed to filterBetween only contains numbers');
    }
  });
  if (typeof (min) !== 'number') {
    throw new Error('whoops! check that \'min\' passed to filterBetween only contains numbers');
  }
  if (typeof (max) !== 'number') {
    throw new Error('whoops! check that \'max\' passed to filterBetween only contains numbers');
  }

  const result = arr.filter((num) => num >= min && num <= max);

  if (result.length === 0) {
    throw new Error('Results empty: check array being passed');
  } else {
    return result;
  }
};

const arr = [5, 10, 15, 20, 25, 30, 35];
console.log(filterBetween(arr, 0, 16));

module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween,
};
