// Q1.Write a function that prints "Hello, World!".

// function myfunction() {
//   console.log("hello World")
// }
// myfunction()


// Q2. Write a function that takes a name and returns "Hello, <name>!".

// function myfunction2 (name) {

//   return console.log("Hello,<name>!");
// }
// myfunction2();

// Q3.Write a function that adds two numbers.

// function sum(a,b) {
//   return (a + b);
// }

// console.log(sum(5, 6));


// Q4.Write a function that subtracts two numbers.

// const sub = (a, b) => {
//   return (a - b);
// }
// console.log(sub(4,3))


// Q5.Write a function that multiplies two numbers.

// const multiplies = (a, b) => {
//   return (a * b);
// }
   
// console.log(multiplies(6, 5));


// Q6.Write a function that divides two numbers.

// const divides = (a, b) => {
//   return (a / b);
      
// }
// console.log(divides(10, 2));


// Q7.Write a function that returns the square of a number.

// const square = (a) => {
//   return (a * a);
// }
// console.log(square(4));

// console.log(divides(10, 2));


// Q8 Write a function that returns the cube of a number.

// const cube = (a) => {
//   return (a * a * a);
// }
// console.log(cube(4));


// Q9.Write a function that checks whether a number is even or odd.
  
// const prompt = require('prompt-sync')();

// let a = Number(prompt("Enter your Number: "));

//   function checkNumber(a) {

//   if (a%2===0){
//     return `The number ${a} is even `;
//   } else {
//     return `The number ${a} is odd`;
//   }
    
// }
// console.log(checkNumber(a));


// Q10 Write a function that returns the larger of two numbers.

// const prompt = require('prompt-sync')();

// const a = Number(prompt("Enter your First number: "));

// const b = Number(prompt("Enter your Second number: "));

// function checkLarger (a,b) {
//   if (a > b) {
//     return `Number ${a} is larger than ${b} `;

//   } else if (a===b) {
//     return `Number ${a} is equal to ${b} `;

//   } else {
//     return `Number ${b} is largest than ${a} `;
//   }
// }

// const result = checkLarger(a, b);

// console.log(result);


// Q11.Write a function that returns the factorial of a number

// const prompt = require('prompt-sync')();
   
// function checkfact(n) {

//   let fact = 1;
  
//    for (let i = 1; i<=n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// let n = Number(prompt("Enter your number: "));

// console.log(checkfact(n));


// Q12. Write a function than returns and check prime Number.

// const prompt = require('prompt-sync')();

// let num = Number(prompt("Enter your number: "));

// function checkprimeNumber(num) {

//   if (num <= 1) {
//     return `this is not a prime number`;
//   }

//   for (let i = 2; i < num; i++) {
    
//     if (num % i === 0) {
//      return ` this is not a  prime number`;
//     }
//   }
//   return `this is a prime number`;
  
// }
//   console.log(checkprimeNumber(num));


// Q13. write a function to reverse string.

  
// function reversestr(n) {
//   let reverse = "";
//   for (let i = n.length-1; i >= 0; i--) {
     
//     reverse = reverse + n[i];
//   }
//   return reverse;
//  }
   
// console.log(reversestr("amit"));
// console.log(reversestr("javascript"));
 


