'use strict'

// function generate(testLengthArray){
//   return Array.from({length : testLengthArray.length})
//     .map(item => ({
//       input: Array.from({length: item}).map(item => []),
//       target: 0,
//       output: -1
//     })
//   ); // Remove this line and change to your own algorithm
// }
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

function generate(testLengthArray){
  var result = [];

  for (var i = 0; i < testLengthArray.length; i++) {
    var input = [];
    var size = testLengthArray[i];

    while (size > 0) {
      var randomInt = Math.floor(Math.random()*20000) - 10000;
      if (search(input, randomInt) == -1) {
        input.push(randomInt);
      size--;
      }
    }

    input = sort(input);

    var target;
    var output;
    if (i % 4 == 0) {
      target = input[0];
    }
    else if (i % 4 == 1) {
      target = input[testLengthArray[i]-1];
    }
    else if ( i % 4 == 2) {
      do { 
        target = Math.floor(Math.random()*20000) - 10000;
      } 
      while (search(input, target) != -1);
    }
    else {
      var randomIndex = Math.floor(Math.random() * ((testLengthArray[i] - 2) - 1 + 1)) + 1;
      target = input[randomIndex]; 
    }
    
    output = search(input, target);
    var testCase = {"input" : input, "target" : target, "output" : output};
    result.push(testCase);
  }

  return result;

}

module.exports = generate
