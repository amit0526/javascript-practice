/*================= Variables(11–20) ============ */

// 11.Create a variable named name.

const name = "Amit";
// console.log(name);

// 12.Store your age in a variable.

const age = 25;
// console.log(age);

// 13.Store two numbers and print their sum.

const num1 = 20;
const num2 = 30;
// console.log(num1 + num2)

// 14.Swap two variables.

let a = 5;
let b = 3;   

let temp = a;
a = b;
b = temp;
// console.log(a)
// console.log(b)

/** Destructuring Method   */

let c = 3;
let d = 4;
[c, d] = [d,c]
// console.log(c);
// console.log(d);

// 15.Create variables for first and last name and print the full name.

const str1 = "Amit";
const str2 = "Anand";
console.log(str1 + str2);
console.log(str1, str2);

// 16.Store a price and quantity and calculate the total.

const price = 400;
const quantity = 4;
const total = 4 * 400;
console.log(`The calculate of total is ${total}`)

// 17.Change a variable value after declaration.