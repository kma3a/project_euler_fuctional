var _ = require('underscore');

function isPal(num) {
  var reversed_string = reverse(num.toString())
  return _.isEqual(num, reversed_string);
}

function reverse(string) {
  return arrayToNum(string.split('').reverse());
}

function arrayToNum(array) {
  return Number(array.join(''));
}

function generateNum(digit){
  var array = [];
  for(var i = 0; i < digit; i++) {
    array.push(9);
  }
  return arrayToNum(array);
}

function generateMod(digit){
  var array = [];
  for(var i = 0; i < digit; i++) {
    if(i == 0) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  return arrayToNum(array);
}


function getNums(digit) {
  var startNum = generateNum(digit);
  var modNum = generateMod(digit);
  var pal = find_pal(startNum, startNum, startNum, modNum)
  console.log(pal);
}

function find_pal(num1, num2, startNum, modNum) {
  var product = num1 * num2;
  if (isPal(product)){
    return product
  } else {
    var new1 = num2 % modNum === 0 ? num1 - 1 : num1;
    var new2 = num2 % modNum === 0 ? startNum : num2 - 1;
    return find_pal(new1, new2, startNum, modNum);
  }
}

getNums(3);

