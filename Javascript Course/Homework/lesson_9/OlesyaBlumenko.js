function countMatches(string1, string2){
var k = 0;
var retest = /^[a-z]+$/, gmi; 
 if(retest.test(string1) && retest.test(string2) ){
for(var i = 0; i<string1.length; i++){
  for(var j=0; j<string2.length; j++ ){
    if(string1[i]===string2[j]){
     string1=string1.slice(1);
     string2=string2.slice(1);
     k++;
     
    }
  }
}
return k;

}else{
  return false
}
}