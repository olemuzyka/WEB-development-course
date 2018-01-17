var arr1 = [1,2,3,4,5,6],
    arr2 = [1,4,3,2,5,6];
          
    function isSame(arr1, arr2) {
      function findIndex(i) {
          passIndex = arr2.indexOf(arr1[i], i + 1);
          if( arr1[passIndex] === arr2[passIndex]) {
              return findIndex(passIndex);
          } else {
              return passIndex;
          }
      }
      
    let odds = 0,
        changedIndex = null,
        passIndex = null;
  
    if(arr1.length != arr2.length) { return false; }
    
    
    for(let i = 0; i< arr1.length; i++) {
      if( arr1[i] !== arr2[i] ) {
        if( odds===0 ) {
          passIndex = findIndex(i);
          changedIndex = i;
          
          if( passIndex < 0 ) {
            return false;
          }
        } else if(odds===1) {
          if( i == passIndex ) {
            if(arr1[i] !== arr2[changedIndex]) {
              return false;
            }
          }else {
            return false;
          }
        }else if( odds>1 ) {
          return false;
        }
        
        odds++;
        
      }
    }
        
    return true;
  }

isSame(arr1, arr2);