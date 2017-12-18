function increase (arr) {
  var result = [];
  for (var i =0; i < arr.length-1; i++) {
    if (arr[i] >= arr[i+1]) {
      result.push(arr[i]);
    }
  }
  if (result.length >= 2 ) {
    return false;
  }
  else {
    return true
  }
}