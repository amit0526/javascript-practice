// Write a function that takes a number and returns "Even" or "Odd".

const prompt = require("prompt-sync")();
// const n = Number(prompt("Enter your number: "));

function check(n) {
  if (n%2===0) {
    return `Even`;
  } else {
    return `Odd`;
  }
}
// console.log(check(n));

// 2. Largest of Three Numbers. Take three numbers and print the largest one.

const one = Number(prompt("Enter your first number: "));
const two = Number(prompt("Enter your second number: "));
const three = Number(prompt("Enter your third number: "));

