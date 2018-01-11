// var a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
// var b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
var a = [4,6,3];
var b = [3,4,6];
function compareArr(a,b) {
  var flag = false;
  if (a.length != b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      if (!flag) {
        for (var j = i + 1; j < b.length; j++) {
          if (a[i] == b[j]) {
            [b[i], b[j]] = [b[j], b[i]];
          }
        }
      } else {
        return false;
      }
      flag = true;
    }
  }
  return true;
}
console.log(compareArr(a,b));
