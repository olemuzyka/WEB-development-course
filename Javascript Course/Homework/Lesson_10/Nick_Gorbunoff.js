function sameArray(a, b){

  var x = [];
  var y = [];
  var z = [];
  
  if(a.length!==b.length){
    return false;
  }
  
  for(var i=0; i<a.length; i++){
    if(a[i]===b[i]) x.push(a[i]);
    if(x.length===a.length) return true;
  }

  var c = a.slice(0);
  var d = b.slice(0);

  c.sort();
  d.sort();
  
  for(var j=0; j<c.length; j++){
    if(c[j]!==d[j]) return false;
  }
  
  for(var k=0; k<a.length; k++){
    if(a[k]!==b[k]) z.push(a[k]);
    if(z.length>2) return false;
  }
  
  return true;

}

sameArray(a, b);