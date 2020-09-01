const sumAll = function(num1, num2) {
  //check both are numbers
  if(typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0) return 'ERROR';
  
  //if num1 is bigger, exchange variables such that num1 < num2
  if(num1 > num2){
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  //loop from num1 getting bigger, adding each time.
  let sum = 0;
  for(let i = num1; i <= num2; i++)
    sum += i;

  return sum;
}

module.exports = sumAll
