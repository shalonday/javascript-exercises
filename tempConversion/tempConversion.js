const ftoc = function(f) {
  let ans = (f-32)*5/9;
  if (hasDecimals(ans))
    ans = roundToOne(ans);
  return ans
}

const ctof = function(c) {
  let ans = (c * 9/5) + 32;
  if (hasDecimals(ans))
    ans = roundToOne(ans);
  return ans;
}

function roundToOne(n) {
  return (Math.round(n * 10) / 10);
}

function hasDecimals(n){
  return (n > 0 && n % 1 > 0 || n < 0 && n % -1 != 0);
}

module.exports = {
  ftoc,
  ctof
}
