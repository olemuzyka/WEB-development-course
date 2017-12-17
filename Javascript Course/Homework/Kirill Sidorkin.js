function mas(n){
  function compare(a,b){
    return a-b;
  }
  n.sort(compare);
  return (n[n.length-1]-n[0])-(n.length-1);
}

var a=[6,2,3,8];
mas(a);
