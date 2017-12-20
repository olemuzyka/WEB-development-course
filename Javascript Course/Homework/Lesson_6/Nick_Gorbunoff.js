function bingo(number){
  
  if (number < 10 && number > 10^6){
    return false;
  }
  
  number = String(number).split('').map(Number);
  
  if (number.length % 2 !== 0){
    return false;
  }
  
  var firstSide = 0;
  var secondSide = 0;
  
  for(var i = 0; i < ((number.length/2)); i++){
    firstSide += number[i];
    }
  
  for(var j = ((number.length/2)); j < (number.length); j++){
    secondSide += number[j];
    }
  
  if (firstSide === secondSide){
    return true;
  } else {
    return false;
  }
}

bingo(number);