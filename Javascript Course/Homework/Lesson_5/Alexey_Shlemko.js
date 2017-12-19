function isArraySortedWithoutOne(arr) {
  var results = [];
  var callback = false;
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr.slice();
    delete arr2[i];
    arr2 = arr2.filter(function(e){return e;});
    results.push(isArraySorted(arr2));
  }
  for (var j = 0; j < results.length; j++) {
    if (results[j]) {
      callback = true;
    }
  }
  return callback;

  function isArraySorted(arr) {
    var sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        sorted = false;
      }
    }
    return sorted;
  }
}
