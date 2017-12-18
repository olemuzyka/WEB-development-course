var mass = [2,3,6,8,12];

function getter(arr) {
	var max = Math.max.apply(null,mass),
	min = Math.min.apply(null,mass),
	fullArr = [],
	rezult = 0;

	for(var i = min; i <= max; i++) {
		fullArr.push(i)
	}
	rezult = fullArr.length - arr.length

	return rezult
}

getter(mass)
