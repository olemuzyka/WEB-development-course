function arrCheck(n) {

	var arrCheck = [];

	for (var i = 0; n.length - 1 > i; i++) {
		if (n[i+1] > n[i]) {
			continue;
		} else {
			arrCheck.push(1);
		}
	} 

	if (arrCheck.length > 1){
		return false;
	} else {
		return true;
	}
}