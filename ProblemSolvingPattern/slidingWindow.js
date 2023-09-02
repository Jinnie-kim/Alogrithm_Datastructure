// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Refactored

function maxSubarraySumRefactored(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
