// Show a weekday
// Write a function weekday(date) to find the weekday for a given Date object,
// returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
const weekday = (year, month, day) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(year, month, day);
  return daysOfWeek[d.getDay()];
};

// weekday(2017, 9, 10);

// Get a snippet from text
// Write a function snippet(string, maxlength) that shortens the string given to the maxlength
// and adds the ellipsis character ("…") to the end of string, and then returns the shortened
// string. If the string is shorter than the maxlength, just return the string unmodified.

const snippet = (string, maxlength) => {
  if (string.length < maxlength) { string }
  return `${string.slice(0, maxlength)}...`;
};

// Number of properties
// Write a function numProps(obj) that returns the number of properties an object has.
// Ignore symbolic properties and count only the "own properties" (not inherited) of the
// object.
const numProps = (obj) => {
  const objectKeys = Object.keys(obj);
  console.log(objectKeys.length);
  return objectKeys.length;
};

// Filter between
// Write a function filterBetween(array, min, max) that takes an array of numbers,
// a min value, and a max value. It returns a new array containing only the elements that
// are greater than or equal to min and less than or equal to max.
const filterBetween = (arr, min, max) => {
  const result = arr.filter((num) => num >= min && num <= max);
  console.log(result);
  return result;
};
