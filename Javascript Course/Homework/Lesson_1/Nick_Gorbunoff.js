function calcCentury(year){
	if (year>=1 && year<=(new Date().getFullYear())) {
		return (Math.ceil(year / 100));
	}	else {
		return "Год указан не правильно";
	}
}