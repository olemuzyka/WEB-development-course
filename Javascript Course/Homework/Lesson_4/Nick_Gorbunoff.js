function calcArray(array){

	function compare(a, b) {return a-b;}
	
	array.sort(compare);
	
	var result = [];
	
	for(var i = array[0]; i < array[array.length - 1]; i++ ){

	  if( array.indexOf(i) === -1){

	    result.push(i);

	  } 
	  
	}
	
	return (result.length);
	
}

var arr = [ 6, 2, 3, 8 ];

calcArray(arr);