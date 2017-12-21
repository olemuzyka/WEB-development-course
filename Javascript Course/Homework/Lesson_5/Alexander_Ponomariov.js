function isGrowAfterDel( numArr ) {

	let quantity = 0;
	
	for (let i = 0; i < numArr.length; i++) {
	  	let dif = numArr[i+1] - numArr[i];
	  	dif <= 0 ? quantity++: '';
	  	if ( quantity > 1 ) return false;
	}

	return true;

}

isGrowAfterDel([1,3,2,5,10]);
