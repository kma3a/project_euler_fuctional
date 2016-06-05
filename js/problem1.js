var isDiv = function(num) {
  return num % 3 === 0 || num % 5 === 0;
}

//array

var addIndexes = function(x, i) {
  return i + 1;
}

var array = function(upperLimit) {
  return Array.apply(null, new Array(upperLimit)).map(addIndexes);
};

var filterArray = function(limit) {
  return array(limit).filter(isDiv);
};

var calcSum = function(limit) {
  return filterArray(limit -1).reduce(sum);
}

var sum = function(previous, current) {
  return previous + current;
}

//recursive

function count(limit) {
  return getSum(limit - 1, 0);
}

var getSum = function (limit, sum) {
  if( limit === 0 ) { return sum};
  return getSum(limit - 1, change_sum(limit, sum));
}

function change_sum(limit, sum) {
  if(isDiv(limit)) { return sum + limit};
  return sum;
}



console.log(count(1000));
console.log(calcSum(1000));
