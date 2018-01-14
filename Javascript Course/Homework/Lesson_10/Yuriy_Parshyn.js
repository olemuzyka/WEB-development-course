// var a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
// var b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
var a = [4,6,3];
var b = [3,4,6];
function compareArr(a, b) {
  if (a.length != b.length) {
    return false;
  }
  var count = 0;
  var c = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      c.push(b.indexOf(b[i]));
      count++;
      if (count > 2) {
        return false;
      }
      if (count == 2) {
        [b[c[0]], b[c[1]] ] = [ b[c[1]], b[c[0]]];
      }
    }
  }
  return true;
}
console.log(compareArr(a, b));
