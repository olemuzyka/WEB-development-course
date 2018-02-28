var arr =  ['aba', 'aa', 'ad', 'vcd', 'aba'] ;

function sortArray(array){

  var longestWord = 0;

  for(var i = 0; i < array.length; i++){
    if(array[i].length > longestWord){
	  longestWord = array[i].length;
	  }
  }
  
  var result=[];
  
  result = array.filter(item => item.length > (longestWord-1));
  
  return result;
  
}
 
sortArray(arr);