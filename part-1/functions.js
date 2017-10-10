// Show a weekday
// Write a function weekday(date) to find the weekday for a given Date object,
// returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
const weekday = (year, month, day) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(year, month, day);
  console.log(`The Day of the week you are looking for is ${daysOfWeek[d.getDay()]}`);
  return daysOfWeek[d.getDay()];
};

weekday(2017, 9, 10);

// Get a snippet from text
// Write a function snippet(string, maxlength) that shortens the string given to the maxlength
// and adds the ellipsis character ("…") to the end of string, and then returns the shortened
// string. If the string is shorter than the maxlength, just return the string unmodified.

// Number of properties
// Write a function numProps(obj) that returns the number of properties an object has.
// Ignore symbolic properties and count only the "own properties" (not inherited) of the
// object.

// Filter between
// Write a function filterBetween(array, min, max) that takes an array of numbers,
// a min value, and a max value. It returns a new array containing only the elements that
// are greater than or equal to min and less than or equal to max.
