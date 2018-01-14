function equalArrays(array1, array2){
  if(array1.length !== array2.length) return false;
var differences = 0;
for(var i = 0; i < array1.length; i++){
  if(differences>=2) return false;
  if(array1[i]!==array2[i]){
    differences++;
   }
 }
  return true;
 }
equalArrays(a, b);
