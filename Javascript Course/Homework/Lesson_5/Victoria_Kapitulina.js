function checkSort(array) {
  var extraNumbers = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      extraNumbers.push(i);
      continue;
    }
  }
  if (extraNumbers.length < 2) {
    return true;
  } else {
    return false;
  }
}
checkSort([1, 3, 2, 1]);