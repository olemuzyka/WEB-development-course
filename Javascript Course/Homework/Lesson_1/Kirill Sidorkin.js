var x = prompt("Введите год","");
if (x<1 || x>2017 || x.charAt(0)==="0"){
	alert("Год введён неверно");
}
else{
	alert("Это " + Math.ceil(Number(x)/100) + "-й век");
}