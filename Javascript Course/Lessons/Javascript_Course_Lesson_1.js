// Особенности синтаксиса

// правильная запись
// function HelloWorld() {
//   var answer = "Hello";
//   return {
//     answer: "Hello"
//   }
// }



// неправильная запись
// function HelloWorld() {
//   var answer = "Hello";
//   return 
//   {
//     answer: "Hello"
//   }
// }

// HelloWorld();


// Особенности
// 1 == 1; //true
// 'foo' == 'foo'; //true 
// [1,2,3] == [1,2,3]; //false
// new Array(3) == ",,"; //true
// new Array(3).toString(); //",,"


// Числа
// 0.1+0.2 == 0.3;
// 0.1+0.2 // 0.30000000000000004
// 1 == 1.0 // true

// Ошибочные числа
// 1/0 // Infinity
// -1/0 // -Infinity
// NaN = не числовое значение (Not a Number)
// -Любая операция с NaN дает NaN
// NaN != NaN
// isNaN(…)


// Некоторые удобные функции

// Number(10);
// Number('42.23');
// Number('71oshi'); // NaN

// parseInt('18'); // 18
// parseInt('19kdjas'); //19
// parseInt('74.54'); //74
// parseFloat('74.54'); // 74.54

// parseInt("ff", "16"); //255
// parseInt("0x10"); // 16
// parseInt("0x10","10"); //0


// Преобразования

// var y = 43.81327;
// y.toFixed(); // 44
// y.toFixed(1); // '43.8'
// y.toFixed(2); // '43.81'

// Math.floor(43.81327); //43
// Math.ceil(43.81327);  //44

// Math.max(10, 20); // 20
// Math.max(-10, -20); // -10
// Math.max(-10, 20); // 20

// Math.random()
// Math.round()
// Math.sign(-5) // ECMAScript 6
// Math.sin()
// Math.cos()
// Math.sqrt()


// var n = 7432;
// n.toString(); // '7432'
// n.toString(2); // '1110100001000'


// Строки

// var string1 = "本語";
// var string2 = 'terrible';

// string2.length; // 8
// "dance".length; //5
// '42'.length; // 2

// Использование символов юникода

// var uni = "\u1552"; // 'ᕒ'
// uni // 'ᕒ'
// "\u1552".length // 1

// Экранирование символов с помощью \

// 'it\'s my life';

// Строки vs. символы

// "abcdef".charAt(2); // c
// "abcdef".charAt(200); // ""
// "abcdef".charAt(-1); // ""

// Конкатенация

// "abcdef".charAt(0) + "abcdef".charAt(2) + "abcdef".charAt(4); //abc
// "together" + " again"; // 'together again'
// 12 + " or " + "20"; // '12 or 20'

// Строки и числа

// "12" / 2 + 1; // 7
// "12" * 2 // 24
// "day" * 2; // NaN


// var a = 42;
// a.toString(); // '42'
// a.toString().length; // 2
// a.toString().length.toString(); // '2'

// "Blink " + 182; // "Blink 182"
// "Blink " + 181 + 1; // "Blink 1811"
// "Blink " + (181 + 1); // 'Blink 182'

// Сравнение строк 
// "a" < "b"; // true
// "c" < "b"; // false
// "abcd" < "abcd"; // false
// "abcd" < "abdc"; // true
// "toy" === "t" + "o" + "y"; // true 


// Операторы

// if ( condition && condition ) {
//     // some action happens here for logic AND
// } else if ( condition || condition ) { 
//     // some action for logic OR
// } else if ( !condition ) {
//     // some action happens here for negating condition
// } else { 
//   if ( condition ) {
//       // some action happens here for nesting conditions
//   }
// }


// Comparison operator

// ==, !=, ===, !==, >, <, >=, <=,


// Циклы

// While Loops

// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// var counter = 0;
// while (counter < days.length) {
//   document.write(days[counter] + ', ');
//   counter++;
// }

// Do/While Loops
// do {
// // javascript to repeat
// } while (condition) ;


// Объекты

// var obj = {};

// var person = {
//     "name" : "Alex",
//     age : 25,
//     "first-element": 100,
//     firstElement: 100,
//     "":"Weird!",
//     ":;;:" : 24
// };


// Доступ к свойтвам объектов через точку

// person.name // 'Alex'
// person.age // 25

// person['first-element']; //100
// person['age']; //25
// person['']; // 'Weird!'


// Вложенность
var person = {
    name : "Alex",
    wife : {
        name : "Eve",
        age :29 
    },
    age :25 
};

person.wife.name; // 'Eve'


// Обновление
person.wife.name = 27;
person.wife.name;
person;

