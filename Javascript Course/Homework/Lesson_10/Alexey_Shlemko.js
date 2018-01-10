function isArraysSimilar(array1, array2) {
  var counter = 0;
  var nessesarySwitches = 0;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      if ((array1[i] == array2[i + 1]) & (array1[i + 1] == array2[i])) {
        nessesarySwitches++;
        i++;
      } else {
        counter++;
      }
    }
  }
  if ((counter === 0) & (nessesarySwitches <= 1)) {
    return true;
  } else {
    return false;
  }
}
