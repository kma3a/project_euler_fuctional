function squared(num) {
  return Math.pow(num, 2);
}

//array

var addIndexes = function(x, i) {
  return i + 1;
}

var squareIndexes = function(x, i) {
  i++;
  return squared(i);
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
  return squared(calcSum(array(limit,addIndexes)));
}

var eachSquare = function(limit) {
  return calcSum(array(limit, squareIndexes));
}

var getDiff = function(limit) {
  return sumSquared(limit) - eachSquare(limit);
}


//recursive

function getDiffRe(limit) {
  return generateDiff(limit, 0, 0);
}

function generateDiff(limit, sumSquared, squaredSum) {
  if(limit === 0 ){return squared(sumSquared) - squaredSum;}
  numSquared = squared(limit);
  return generateDiff(limit-1, sumSquared+limit, squaredSum+numSquared);
}
  
  




console.log(getDiff(100));
console.log(getDiffRe(100));
