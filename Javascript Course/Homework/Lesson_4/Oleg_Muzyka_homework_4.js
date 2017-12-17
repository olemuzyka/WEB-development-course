var array = [6, 2, 3, 8];
function fun(x){
var sortArray = array.sort();
var count = 0;
    for (var i = 0; i < sortArray.length; i++){
      if (sortArray[i+1] - sortArray[i] != 1){
      count++;
      } 
    }
    return count;    
}
 
fun(array);
