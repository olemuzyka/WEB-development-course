function similar(a , b){
   var n = 0;
  for (var i = 0; i < a.length; i++){
  if(a[i] !== b[i]){
  for (var j = i; j < b.length; j++){
        if(a[i] ===  b[j] || a[j] === b[i]){
            n++;
            
        }
            
  }
}
}
  if(n>1){
    return false;
  }else{
    return true;
  }
}