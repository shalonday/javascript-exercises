const removeFromArray = function(array, ...remElement) {
  let out = array.slice(0);
  for (let i = 0; i < remElement.length; i++){
    for (let j = 0; j < array.length; j++){
      if(remElement[i] === array[j])
        lookAndRemove(remElement[i], out);  //splice out array element that matched with remElement
    }
  }
  return out;
}

//using a function resets array.length, so repeating remElements that are beside each other will be captured.
function lookAndRemove(element, array){
  for (let i = 0; i < array.length; i++){
    if (element == array[i])
      array.splice(i, 1);
  }
}

module.exports = removeFromArray
