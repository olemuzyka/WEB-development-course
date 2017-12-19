function filterArray(someArray){
var result;
var counter = 0;
var removed;

 if(someArray.length<=1) return true;
    while(counter<=someArray.length-1){
       removed = someArray.splice(counter, 1);
          for(var i = 0; i<=someArray.length-1; i++){
             if(someArray[i]>=someArray[i+1]){ 
                   result = false;
                   break;
                 }
                 result = true;
          }
         if(result) return true;
       someArray.splice(counter, 0, removed[0]);
    counter++;
  }
  return result;
}
filterArray([1, 3, 2, 1]);
