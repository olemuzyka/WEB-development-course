var matrix = [[0, 1, 1, 2],
              [0, 5, 0, 0], 
              [2, 0, 3, 3],];
              
function apartments(house){
  
  for (var l=0; l<house.length-1; l++){
    if (house[l].length!=house[l+1].length){
        return false;
    }
  }
  for (var i=0; i<house.length; i++){
    if (house.length<1 || house.length>5){
      return false;
    }
    if (house[i].length<1 || house[i].length>5){
      return false;
    } 
    for(var j = 0; j < house.length; j++) {
      for(var n = 0; n < house[j].length; n++) {
        if (house[j][n]<0 || house[j][n]>10){
          return false;
        }
      }
    }
  }
  
  function add(a, b) { return a + b }
  var result = 0;
  for (var k=0; k<house.length; k++){
    for(var m = 0; m < house[k].length; m++) {
      if(house[k][m]===0 && k<house.length-1){
        house[k+1].splice(m, 1, 0);
      }
    } 
    result += house[k].reduce(add, 0);
  }
  return result;
}

apartments(matrix);