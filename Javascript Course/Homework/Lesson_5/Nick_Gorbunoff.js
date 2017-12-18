function checkArray(array){
  
  for(var j=0; j<array.length; j++){
    if(array[j] >= array[j+1]){
      array.splice(j, 1);
      break;
    }
  }

  var check=[];
  
  for(var i=0; i<array.length; i++){
    if(array[i] >= array[i+1]){
      check.push('false');
    } else {
      check.push('true');
    }
  }
  
  if (check.filter(item => item === 'false').length > 0){
    return false;
  } else {
    return true;
  }

  // Open Arrow functions

  // var a = check.filter(function(item) {
  //   return item === 'false';
  // });
  
  // if (a.length > 0){
  //   return false;
  // } else {
  //   return true;
  // }
  
}

checkArray(array);