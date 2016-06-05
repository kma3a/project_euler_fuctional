var _ = require('underscore');

// array 
var fibArray = [1]
function printSum(num) {
  fibSeq(num)
  var evenArray = _.filter(fibArray, isEven)
  var evensum = _.reduce(evenArray, sum);
  console.log(evensum);
}
  
function fibSeq(num, currentnum, nextnum) {
  currentnum = currentnum || 1;
  nextnum = nextnum || 2
  if ( num === 1) {return 1}
  if (nextnum >= num) {return 0;}
  fibArray.push(nextnum);
  fibSeq(num, nextnum, currentnum + nextnum);
}

function isEven(value) {
  return value%2=== 0;
}

function sum(a, b) {
  return a + b
}

printSum(4000000);


