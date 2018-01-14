function sameArr(a, b) {

	if (a.length != b.length) {
		return false;
	}

	var c = [];
	for (var i = 0; i < a.length; i++) {		
		var res = a[i] - b[i];
		if (res != 0) {
			c.push(res);
		}	
	}

	if (c.length == 0) {
		return true;
	} else if (c.length != 2) {
		return false;
	} else if (c[0] + c[1] == 0) {
		return true;
	}
	
}