function getMissingDigits(array) {
  function compare(a, b) { return a - b; }
  var sortedArray = array.sort(compare);

  var result = 0;
  for (var i in sortedArray) {
    var num = sortedArray[i] - sortedArray[i - 1];
    if (!isNaN(num) && num !== 1) {
      result += num - 1;
    }
  }

  return result;
}

getMissingDigits([6, 2, 3, 8]);
