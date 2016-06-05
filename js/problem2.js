// array 
var fibArray = [1]
function printSum(num) {
  fibSeq(num)
  var evensum = fibArray.filter(isEven).reduce(sum);
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


//not array

function fibSeq2(num, currentnum, nextnum, presum) {
  currentnum = currentnum || 1;
  nextnum = nextnum || 2;
  presum = presum || 0;
  if ( num === 1) {return 1;}
  if (nextnum >= num) {console.log(presum); return presum}
  sum = isEven(nextnum) ? presum + nextnum : presum;
  fibSeq2(num, nextnum, currentnum + nextnum, sum);
}

fibSeq2(4000000);

