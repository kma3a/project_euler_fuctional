
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

console.log(isDivRange(60, 5));
