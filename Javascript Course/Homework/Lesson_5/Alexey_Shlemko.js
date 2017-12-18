function isArraySortedWithoutOne(arr) {
  var results = [];
  var callback = false;
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr.slice();
    delete arr2[i];
    results.push(isArraySorted(arr2));
  }
  for (var j = 0; j < results.length; j++) {
    if (results[j]) {
      callback = true;
    }
  }
  return callback;

  function isArraySorted(arr) {
    var arr2 = arr.slice().sort(function(a, b) {return a - b});
    return arr.join('') == arr2.join('');
  }
}
