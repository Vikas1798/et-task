// Question 3

// Suppose you have an array of 101 integers.
// This array is already sorted and all numbers in this array are consecutive.
//  Each number only occurs once in the array except one number which occurs twice.
//  Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

// Solution :

const RepeatedNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j])
        // console.log("Repeated Numbers are :"+array[i] + " ");
        console.log(`Repeated Numbers are :${+array[i] + " "}`);
    }
  }
};
RepeatedNumbers([0, 0, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]);

// example :
// RepeatedNumber([1,2,3,4,2,5,3]);
// output : Repeated Numbers are 2 & 3
