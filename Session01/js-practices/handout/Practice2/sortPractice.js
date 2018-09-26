'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  var n = input[0];
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] > input[j]) {
                n = input[j];
                input[j] = input[i];
                input[i] = n;
            }
        }
    }
  return input;
}

module.exports = sort
