// let x = 10;
// const y = 12;

// console.log(b);

// var b = 25;


// printValue()
// function printValue(){
//     console.log("print Value");
// }

// var x =30
// function getValue(x){
//     console.log(x);
// }
// getValue(20)//20

// function greet() {
//   return "Hello!";
// }
// console.log(greet()); //Hello

// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, "3")); //23

// const sayHi = function() {
//   return "Hi there!";
// };
// console.log(typeof sayHi);  //function

// console.log(foo());
// var foo = function() {
//   return "Hello";
// }; //hello

// const square = (x) => x * x;
// console.log(square(4));  //16


// const getValue = () => ({ name: "John" });
// console.log(getValue());// { name: "John" }


// setTimeout(function() {
//   console.log("Executed!");
// }, 1000);  // Executed

// [1, 2, 3].forEach(function(num) {
//   console.log(num * 2);
// });

// function operate(a, b, func) {
//   return func(a, b);
// }
// console.log(operate(5, 3, (x, y) => x - y));  //2

// function outer() {
//   return function() {
//     return "Inner function!";
//   };
// }
// console.log(outer()());  //Inner Function

// function applyTwice(func, value) {
//   return func(func(value));
// }
// function double(x) {
//   return x * 2;
// }
// console.log(applyTwice(double, 5));  //20

// function hof(x, fn) {
//   return fn(x);
// }
// console.log(hof(10, function(n) { return n + 5; })); //15

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// greet("Manish", function() {
//   console.log("Welcome!");
// });  // Hello Manish
// //Welcome

// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// console.log(calculate(4, 2, (x, y) => x * y));  //8

// const square = n => n * n;
// console.log(square(6)); //36


// const add = (a, b) => { a + b };
// console.log(add(2, 3));

function greet(x,callback){
    console.log("Hello" + x);
    callback();
}
function sayBye(){
    console.log("goodbye");
}
greet("Ram",sayBye)
greet("Shyam",sayBye())