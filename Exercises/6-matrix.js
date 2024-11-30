'use strict';

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const MAX = (a, b) => (a > b ? a : b);

const max = (matrix) => {
  // Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  let maxValue = matrix[0][0];

  for (const row of matrix) {
    for (const item of row) {
      maxValue = MAX(item, maxValue);
    }
  }

  return maxValue;
};

module.exports = { max };
