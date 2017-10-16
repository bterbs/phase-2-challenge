// Show a weekday
// Write a function weekday(date) to find the weekday for a given Date object,
// returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
const weekday = (date) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
  if (typeof obj !== 'string') {
    const objectKeys = Object.keys(obj);
    return objectKeys.length;
  } else {
    throw new Error('Unexpected input: no strings please');
  }
};

console.log(numProps({}));

// Filter between
// Write a function filterBetween(array, min, max) that takes an array of numbers,
// a min value, and a max value. It returns a new array containing only the elements that
// are greater than or equal to min and less than or equal to max.
const filterBetween = (arr, min, max) => {
  const result = arr.filter((num) => num >= min && num <= max);
  if (result.length === 0) {
    throw new Error('Results empty: check arr being passed');
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
