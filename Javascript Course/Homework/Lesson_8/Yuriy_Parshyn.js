var arr = ['aba', 'aa', 'ad', 'vcd', 'aba'];
function maxLengthWords (arr) {
    var maxElement = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (maxElement < arr[i].length) {
             maxElement = arr[i].length;
        }
        if(arr[i].length == maxElement){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(maxLengthWords(arr));
