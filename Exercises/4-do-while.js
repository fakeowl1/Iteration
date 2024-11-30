'use strict';

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  if (args.length === 0) return 0;
  let result = 0;

  do {
    result += args.pop();
  } while (args.length > 0);

  return result;
};

module.exports = { sum };
