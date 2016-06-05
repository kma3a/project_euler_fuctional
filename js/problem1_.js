var _ = require('underscore');

var isDiv = function(num) {
  return num % 3 === 0 || num % 5 === 0;
}

var addIndexes = function(x, i) {
  return i + 1;
}

var array = function(upperLimit) {
  return Array.apply(null, new Array(upperLimit)).map(addIndexes);
};

var filterArray = function(limit) {
  return _.filter(array(limit), isDiv);
};

var calcSum = function(limit) {
  return _.reduce(filterArray(limit -1), sum);
}

var sum = function(previous, current) {
  return previous + current;
}


console.log(calcSum(1000));
