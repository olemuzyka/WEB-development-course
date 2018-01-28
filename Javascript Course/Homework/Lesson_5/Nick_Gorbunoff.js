function checkArray(array){
  
  var checkFirst=[];
  var checkSecond=[];
  
  for(var i=0; i<array.length-1; i++){
    if(array[i] >= array[i+1]){
      checkSecond.push('false');
    } 
    if(array[i-1] >= array[i+1]){
      checkFirst.push('false');
    }
  }
  
  if (checkFirst.length <= 1 && checkSecond.length <= 1){
    return true;
  } else {
    return false;
  }
  
}

checkArray(array);