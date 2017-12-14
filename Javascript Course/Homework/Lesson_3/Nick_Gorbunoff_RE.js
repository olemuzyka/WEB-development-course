//with for

function parseText(str){
	
	var re = /<h2(.*?)>(<(\/\w)>([\s\S]*?))<\/h2>/gi; 
	var arr = [];

	var fullMatch = str.match(re);
	
	for (var i=0; i<fullMatch.length; i++){
 		
		var returnArr = re.exec(htmlContent)[4];
 		
		arr[arr.length] =  '<li>' + returnArr + '</li>';
		
	}

	arr.unshift('<ul>');
	arr.push('</ul>');
	
	var string = arr.join('');
	
	return string;

}

parseText(htmlContent);


//with while

function parseText(str){
	
	var re = /<h2(.*?)>(<(\/\w)>([\s\S]*?))<\/h2>/gi; 
	var arr = [];

	var fullMatch = str.match(re);
	
	var i = fullMatch.length;
	
	while(i) {
	
		var returnArr = re.exec(htmlContent)[4];
	 		
		arr[arr.length] =  '<li>' + returnArr + '</li>';
		
		
		i--;
	}

	arr.unshift('<ul>');
	arr.push('</ul>');
	
	var string = arr.join('');
	
	return string;

}

parseText(htmlContent);