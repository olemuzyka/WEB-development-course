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