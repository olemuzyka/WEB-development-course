function getMaxStrings (arr) {
  var biggest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
  var arr2 = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length == biggest.length) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

getMaxStrings (['aba', 'aa', 'ad', 'vcd', 'aba']);