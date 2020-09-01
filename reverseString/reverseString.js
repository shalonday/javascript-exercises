const reverseString = function(string) {
  //let tmp = string.split("");
  let out = "";
  for (let i = string.length - 1; i >= 0; i--){
    out += string[i];
  }
  return out;
}

module.exports = reverseString
