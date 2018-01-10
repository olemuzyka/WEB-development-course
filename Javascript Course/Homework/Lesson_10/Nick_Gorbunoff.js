function sameArray(a, b){

  var c = [];

  for(var i=0; i<a.length; i++){
    if(a[i]!==b[i]){
      if(a[i]===b[i+1] || a[i+1]===b[i]){
        c.push('');
        i++;
      }else {
        c.push('');
      }
      if(a[i]===a[i+1] || b[i]===b[i+1]) {
        c.push('');
      } 
    } 
  }
  
  if(c.length<=1){
    return true;
  } else {
    return false;
  }

}

sameArray(a, b);