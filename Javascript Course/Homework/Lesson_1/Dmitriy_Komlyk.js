function years(num) {
  if(num>=1&&num<=2017){
   var result = Math.ceil(num/100);
    return result; 
  }
  else{
    alert('Год указан не правильно');
  }
}
years(parseInt(prompt('Введите год')));
