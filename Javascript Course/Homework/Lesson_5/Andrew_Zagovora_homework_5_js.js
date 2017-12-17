function arrDelGrow(n){

	for (var k = 0; n.length > k; k++) {
		n.splice(k,1);
		if (arrCheck(n) == false) {
			return false;
		}
	} return true;
	
	function arrCheck(n) {

		for (var i = 0; n.length > i; i++) {
			if (n[i+1] < n[i]) {
				return false;
			} 
		} return true;
	} 
}