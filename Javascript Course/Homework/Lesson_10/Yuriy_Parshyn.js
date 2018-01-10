var a = [1,2,3];
var b = [2,1,3];
function compareArr(a,b) {
  if (a.length != b.length) {
    return false;
  }
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        count++;
        break;
      }
    }
  }
  if (count != a.length) {
    return false;
  }
  else {
    return true;
  }
}
console.log(compareArr(a,b));
