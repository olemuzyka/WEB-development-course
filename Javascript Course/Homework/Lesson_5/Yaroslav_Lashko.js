// The function takes an array of integers and returns true, if after deleting a maximum of one number from the array,
// the values of the remaining elements will go in ascending order. False will return if the values are not in ascending order
// or the incoming array does not match the task.
function ascendingArray(integerArr) {
  // BEGIN check for integer array
  if (Array.isArray(integerArr)) {
    for (var i in integerArr) {
      if ((integerArr[i] ^ 0) !== integerArr[i]) {
        return false;
      }
    }
  } else {
    return false;
  } // END check for integer array
  var cloneArr = [];
  for (var i in integerArr) {
    for (var k in integerArr) {
      cloneArr[k] = integerArr[k];
    }
    cloneArr.splice(i, 1);
    for (var j = 0, smallerNumbers = 0; j < cloneArr.length - 1; j++) {
      if (cloneArr[j] < cloneArr[j + 1]) {
        smallerNumbers++;
      }
    }
    if (smallerNumbers == cloneArr.length - 1) {
      return true;
    }
  }
  return false;
}
