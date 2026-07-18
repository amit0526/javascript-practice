// Q1. Print 1 to 100

// for (let i = 1; i <= 100; i++){
//   console.log(i);
// }

// Q2. Print 100 to 1

// for (let i = 100; i >= 1; i--){
//   console.log(i);
// }

// Q3. Print all even numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//   if (i % 2===0) {
//     console.log(i);
//   }
// }

// Q4. Print all odd numbers from 1 to 100

// for (let i = 1; i <= 100; i++){
//   if (i % 2 !== 0) {
//     console.log(i)
//   }
// }

// Q5. Print multiplication table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 X ${i} = ${i * 5}`);
// }

// Q6. Print square of numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

// Q7. Print cube of numbers from 1 to 10

// for (let i = 1; i <= 10; i++){
//   const cube = i * i * i;
//   console.log(cube);
// }

// Q8. Find sum of numbers from 1 to 100

// let sum = 0;
// for (let i = 1; i <= 100; i++){
//   sum += i;

// }
// console.log(`total sum of number is ${sum}`);

// Q9. Find sum of even numbers from 1 to 100

// let sum = 0;

// for (let i = 2; i <= 100; i++){

//   sum += i;
// }
// console.log(`Total Sum of Even Number is ${sum}`);

// Q10. Find sum of odd numbers from 1 to 100

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;

//   }
// }
// console.log(`The total sum of odd number is ${sum}`);

// Q11.Calculate sum of first n numbers

// let n = 10;
// let sum = 0;

// for (let i = 0; i <=n; i++) {
//   sum += i;

// }
// console.log(sum);

// Q12.Calculate the numbers from 'm' to 'n'

// let sum2 = 0;
// let m = 1;
// let n = 10;
// for (let i = m; i <= n; i++) {
//   sum2 += i;
// }
// console.log(sum2);

// Q13. print all odd number 0 to n.

// let n = 10;

// for (let i = 0; i <= n; i++){
//   if (i % 2 !== 0) {
//     console.log(`The Odd number is  ${i}`)
//   }
// }

// Q14.Create a "Number Knock" game. (ask the user to keep guessing the number until the user enters correct guess).

// const prompt = require("prompt-sync")();

// let computer = 10;
// let guess = null;
//   while (guess!==computer) {
//      guess = Number(prompt("Enter your Correct Number: "));
     
//      if (isNaN(guess)) {
//        console.log("Your type invaild number");
//      } else if (guess < computer) {
//        console.log("your number is too low");
//      } else if (guess > computer) {
//        console.log("your number is too high");
//      } else {
//        console.log(" Congrats you gussed it!");
//      }
//   }



/*========================================================*/
//    const secert = 22
//    do {
//       user = Number(prompt("Enter your number: "))
     

//  } while (user !== secert);

//    console.log("you gussed it !");

// Q15. Simple Password Checker (Fixed Attempts)
   
// let Password = "alpha@123";
// let noattemp = 0;
// let userPassword = null;

// while (Password !== userPassword && noattemp < 3) {

//    userPassword = prompt("Enter your Password: ");
//    noattemp++;

//    if (userPassword===Password) {
//       console.log("Congratulation your loggedIn");
//    } else if (noattemp >=3 ) {
//       console.log("Your attemp is over!");
//    } else {
//       console.log("your password is incorret")
//    }
   
// }


// Q16.Create to program to find the factorial of 'n'.

// let n = Number(prompt("Enter your Number"));
// let factorial = 1;

// for (let i = 1; i <= n; i++){
//   factorial = factorial * i;
//    console.log(factorial)
// }

// Q17.Print the following pattern. (build it for nth numbers)

// 1

// 12

// 123

// 1 2 3 4

// 1 2 3 4 5

// for (let i = 1; i <= 5; i++){
//    let str = "";
//    for (let j = 1; j <= i; j++){
//       str = str + j;
//    }
//    console.log(str)
// }




   