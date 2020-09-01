const leapYears = function(n) {
  //return true if: divisible by 4 and not by 100; or divisible by 100 && 400;
  if(n % 100 > 0 && n % 4 == 0 || n % 100 == 0 && n % 400 == 0) return true;
  return false; //else 
}

module.exports = leapYears
