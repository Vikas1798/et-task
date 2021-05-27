// Question 1
// Define an array of numbers (use any random numbers).
// Write a program to print only the even numbers of the array.
// Do not use any library functions, need to do via for loops only

// Solution :

// function myFunction (array){
//     let arr = [];
//     for(let i = 0; i < array.length ; i++ ){
//         if( array[i] % 2 === 0){
//             arr.push(array[i]);
//         }
//     }
//     return arr;
// }
// myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// output : [ 2, 4, 6, 8, 10]

// same problem solving with the help of ES6 feature
const myFunction = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  return arr;
};
myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// output : [ 2, 4, 6, 8, 10]
