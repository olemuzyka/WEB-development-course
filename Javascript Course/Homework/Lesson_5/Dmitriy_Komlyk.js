function filterArray(someArray){
var result;
var counter = 0;
var removed;

 if(someArray.length-1<=2) counter = 1;
    while(counter<=someArray.length-1){
       removed = someArray.splice(counter, 1);
          for(var i = 0; i<someArray.length-1; i++){
            if (removed[0]==someArray[i]) return false;
            else result = true;
          }
       someArray.splice(counter, 0, removed[0]);
    counter++;
  }
  return result;
}
filterArray([1, 3, 2, 1]);
