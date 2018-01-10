function equalArrays(array1, array2){
var counter = 0;
while(counter < array1.length){
  if(array1[counter]==array2[counter]){
    counter++;
   }
    else{
      var a = array2.indexOf(array1[counter]);
      array2[a] = array2.splice(counter,1, array2[a])[0];
      break;
    }
 }
  return !(array1<array2 || array2<array1);
  }
equalArrays([1, 2, 3], [2, 1, 3]);
