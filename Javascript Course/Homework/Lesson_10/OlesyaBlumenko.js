function similar(a , b){
  
  function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  }
  
  a = a.sort(compare);
  b = b.sort(compare);
  a = a.join(',');
  b = b.join(',');
  
  if(a === b){
    return true;
  }else{
    return false;
  }
  console.log(a , b);
}