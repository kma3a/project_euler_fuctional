var _ = require('underscore');

//nonrecursive
function isPrime(num) {
  for(var start = Math.round(Math.sqrt(num)); start>1; start--)  {
    if( num % start == 0 ) {
      return false
    }
  }
  return true
}

function getFactors(num) {
  var factorArray = [];
  for(var start = Math.round(Math.sqrt(num)); start>1; start--)  {
    if( num % start == 0 ) {
      factorArray.push(start, num/start)
    }
  }
  return factorArray;
}

function getPrimeFactors(num) {
  return _.filter(getFactors(num), isPrime)
}

console.log(getPrimeFactors(13195))
console.log(getPrimeFactors(600851475143))
