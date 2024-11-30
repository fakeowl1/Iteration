'use strict';

// Use for..of loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let result = 0;
  for (const item of args) {
    result += item;
  }
  return result;
};

module.exports = { sum };
