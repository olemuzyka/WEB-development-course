// console.log('Hello Webpack');


// Understanding ES6 Essentials

// Assignment with let and const


// pre-es6 assignment


//let


// var limit = 100;
// console.log(limit);
//
//
// let limit = 100;
// console.log(limit);

/*

var limit = 200;
{
    var limit = 10; // error, changes the original limit.
    console.log('backstage limit', limit);
}
console.log('venue limit', limit);
*/

/*
let limit = 200;
{
    let limit = 10; // error, changes the original limit.
    console.log('backstage limit', limit);
}
console.log('venue limit', limit);
*/


// const

// const limit = 200;

// const limit = 300; // error

// console.log(limit);

// const emails = ['frodo@email.com', 'samwise@example.com', 'merry@example.com'];

// emails = [] // error

// emails.push('test@example.com') // valid
//
//
// console.log(emails);


/*
function hello() {
    let message = "Hello!";
    console.log(message);
}

function greeting() {
    let message = "How are you?";
    console.log(message);
}

hello();
greeting();
*/


// Template Literals


/*
let a = `good
bad
1
2
3
`;
*/

// let a = `good`;

// let greeting = `${a} morning`;

// let greeting = a + " morning";


// console.log(greeting);

/*

let b = 'birthday';
let c = `Happy ${b}!`
console.log(c);

*/


// Spread Operator

// let a = [20, 30, 40];
// let b = [10, 50];


// let a = [20, 30, 40];
// let b = [10, 50, ...a];

// let a = [20, 30, 40];
// let b = [10, ...a, 50];

// let a = ['Dana', 'Erik', 'Frank'];
// let b = ['Alice', 'Bob', 'Carl', ...a];

// console.log(b);


// Rest Parameters

// function collect(...a) {
//     console.log(a);
// }
//
// collect(1, 2, 3, 4, 5);



// Destructuring Assignment on Arrays and Objects

// let z = [4, 5, 6];

// let four = z[0];
// let five = z[1];

// let [four, ,five, six, seven] = z;

// console.log(four, five, six, seven);


// let king = { name: 'Mufasa', kids: 1 };

// let name = king.name;
// let kids = king.kids;

// let { name, kids } = king;

// let {  kids, name } = king;

// let name, kids;

// { name, kids } = king;  // error; standalone block, not destructuring assigment.

// ({ name, kids } = king); // valid destructuring assignment
//
//
// console.log(name, kids);




// Presenting Methods and Modules


// Arrow Functions

// ( ) => { … }

// function cheer() {
//     console.log("Woohoo!")
// }

/*var cheer = function() {
    console.log("Woohoo!")
}*/


/*setTimeout(() => {
    console.log("Woohoo!")
}, 3000);*/



// let cheer = () => {
//     console.log("Woohoo!");
// }


// let cheer = x => console.log(x);


// cheer("Woohoo!");




// Map helper method

/*
let values = [20, 30, 40];

let double = (n) => {
    return n*2;
}
*/


// let doubled = values.map(double);


/*let doubled = values.map((n) => {
    return n*2;
});*/

// let doubled = values.map(n => n*2);
//
// console.log(doubled);




// Filter helper method

// let points = [7, 16, 21, 4, 3, 22, 5];

/*let highScores = points.filter((n) => {
    return n > 15;
});*/

// let highScores = points.filter(n => n>15);

// console.log(highScores);


// String Helper Methods

// String.repeat()

// let b = "wooh" + "oo".repeat(50);
// let b = "wooh" + " ".repeat(50) + "oo";
// console.log(b)

// The search methods for strings include .startsWith, .endsWith, .includes
// console.log("butterfly".startsWith("butter")); // true
// console.log("butterfly".startsWith("fly")); // false
// console.log("butterfly".endsWith("fly")); // true
// console.log("butterfly".includes("butter")); // true

// console.log("butterfly".includes("caterpillar")); // false
// console.log("butterfly".includes("ter")); // true


// Checking Numbers

// Number.isFinite


// const addToCart = (item, number) => {
//     return Number.isFinite(number);
// }

// console.log(addToCart('shirt', 5)); // true
// console.log(addToCart('shirt', Infinity)); // false

// console.log(addToCart('shirt', "Infinity")); //false
// console.log(addToCart('shirt', Math.pow(2, 54))); //true


// Number.isSafeInteger

// -Math.pow(2, 53) - 1) - Math.pow(2, 53) - 1)  // safe



// Modules

// import { fellowship } from './fellowship.js'

// import { fellowship, total } from './fellowship.js'
//
// console.log(fellowship);
// console.log(total);

// import { add, multiply} from "./math";
//
// console.log('add', add(5, 10));
// console.log('multiply', multiply(5, 10));

// import multiply from './math';
// console.log('multiply', multiply(5, 10));



// OOP & Classes

/*
class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
    }
}

let king = new Animal("Mufasa", 4.5);
console.log(king);
console.log(king.hello());
*/



// Inheritance

import Animal from './Animal'
//
// class Lion extends Animal {
//
// }
// let son  = new Lion("Simba", 2)
//
//
// console.log(son);
// console.log(son.hello());

/*class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height)
        this.color = color;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from Pride Rock!`);
    }
}

let son = new Lion("Simba", 2, "golden");
console.log(son);
console.log(son.hello());*/


// Static methods
/*

class Calculator {
    static multiply(a, b) {
        return a*b;
    }

    static add(a, b) {
        return a+b;
    }
}

let a = Calculator.multiply(5,7);
console.log(a);
*/


// ProtoTypes
/*

function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;
    this.greet = () => `I'm ${this.name} from ${this.house}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");




Wizard.prototype.pet_name;
Wizard.prototype.info;
harry.pet_name = "Hedwig";
harry.info = function () {
    return `I have a ${this.pet} named ${this.pet_name}.`;
}


console.log(harry);
console.log(harry.info());

*/

// Presenting Data Structures in ES6


// Set
/*

let a = new Set();

a.add(5);
a.add(43);
a.add("woohoo");
a.add({ x: 50, y: 200 });

a.add(43);
a.add({ x: 50, y: 200 });

console.log(a);
console.log(a.size);

console.log(a.has(5)); // true
console.log(a.has(7)); // false

*/

/*

let numbers = [5, 7, 8, 13, 17];

let numSet = new Set(numbers);


console.log(numSet);

for (let element of numSet.values()) {
    console.log(element);
}
*/

let chars = "aweifawjeoanehmwofeuawhfhwuei";
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);


console.log(chars_set)



