function isGrowing(arr){
  for (var i = 0; i < arr.length; i++) { 
    if ( checkCurent(i) ) { 
      return true; 
    } 
  }
  
  function checkCurent(index) {
    var newArray = arr.slice(0);
    newArray.splice(i, 1); 
    
    for (var j = 0; j < newArray.length; j++) { 
      if (newArray[j] > newArray[j + 1] && j+1 != newArray.length ) { 
        return false; 
      } 
    } 
    return true; 
  }
    
  return false; 
} 

isGrowing( [1, 3, 2, 1] );
//isGrowing( [1, 3, 2] );