string1 = "aabcc";
string2 = "adcaa";

function commonSymbols(string1, string2){
  var array1 = string1.split('');
  var array2 = string2.split('');
  var objSymbols1 = {};
  var objSymbols2 = {};
  var result = 0;
  var reg = /^[a-z]+$/;
  
  if (!reg.test(string1) || !reg.test(string2)){
    return false;
  }

  for (var i = 0; i < array1.length; ++i){
    var a = array1[i];
    if (objSymbols1[a] !== undefined){
      ++objSymbols1[a];
    }else{
      objSymbols1[a] = 1;
    }
  }
  for (var j = 0; j < array2.length; ++j){
    var b = array2[j];
    if (objSymbols2[b] !== undefined){
      ++objSymbols2[b];
    }else{
      objSymbols2[b] = 1;
    }
  }
  
  for (var k in objSymbols1){
    if (objSymbols1.hasOwnProperty(k) && objSymbols2.hasOwnProperty(k)){
      if (objSymbols1[k]>objSymbols2[k]){
        result += objSymbols2[k];
      } else {
        result += objSymbols1[k];
      }
    }
  }
  
  return result;
}

commonSymbols(string1, string2);