var arr = ["abc", "eeee", "abcd", "dcd"];
var arr1 = ["a", "abc", "cbd", "zzzzzz", "abcdef", "aaaaaa"];
var arr2 = ["aba", "aa", "ad", "vcd", "aba"];
function maxLengthWords (arr) {
            var maxElement = 0;
            maxElement = arr.reduce(function(a, b) {
                if (a.length > b.length) {
                    return a.length;
                }
                else {
                    return b.length;
                }
    });
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                    if (arr[i].length == maxElement){
                            newArr.push(arr[i]);
                        }
                }
            return newArr;
        }
console.log(maxLengthWords(arr2));
