'use strict'

function search(input, target) {
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm
  var result = -1;
  for(let i = 0; i < input.length; i++){
    if (input[i] >= input[i+1]) {
      result = "Input ko hop le"
      break;
    }
    else if (input[i] == target) {
      result = i
    }
  }
  return result;
}

module.exports = search
