
function findSmallDiv(num) {
  console.log(calculateDiv(num*num, num));
}

function calculateDiv(num, upLim) {
  for(var i = num; num <= 100000000000; i+=upLim) {
    if(isDivRange(i, upLim)) {
      return i;
    }
  }
}

function isDivRange(num, upLim) {
  if ( upLim === 1) { return true; }
  if (isDiv(num, upLim)) {
    return isDivRange(num, upLim - 1)
  } else {
    return false;
  }
}

function isDiv(num, div) {
  return num % div === 0;
}

findSmallDiv(20);
