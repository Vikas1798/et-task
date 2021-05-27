// Question 2

// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

// Solution :

let ConsecutiveOnes = function (nums) {
  let lgCount = 0;
  let curCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      curCount = 0;
    } else {
      curCount++;
    }
    if (curCount > lgCount) {
      lgCount = curCount;
    }
  }
  return lgCount;
};
ConsecutiveOnes([0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]);
// outout : 3

// findMaxConsecutiveOnes([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
// outout : 1
