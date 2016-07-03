//array

var addIndexes = function(x, i) {
  return i + 1;
}

var squareIndexes = function(x, i) {
  i++;
  return Math.pow(i, 2);
}

var array = function(upperLimit, f) {
  return Array.apply(null, new Array(upperLimit)).map(f);
};

var calcSum = function(curArray) {
  return curArray.reduce(sum);
}

var sum = function(previous, current) {
  return previous + current;
}

var sumSquared = function(limit) {
  return Math.pow(calcSum(array(limit,addIndexes)), 2);
}

var eachSquare = function(limit) {
  return calcSum(array(limit, squareIndexes));
}

var getDiff = function(limit) {
  return sumSquared(limit) - eachSquare(limit);
}



//recursive


console.log(getDiff(100));
