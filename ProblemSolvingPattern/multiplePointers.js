// Write a function called sumZero which accepts a sorted array(from lowest to highest) of integers.
// The function should find the first pair where the sum is 0
// Return an array that includes both values that sum to zero or undefined
// if a pair does not exist

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstPick = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let comparePick = arr[j];
      if (firstPick + comparePick === 0) {
        return [firstPick, comparePick];
      }
    }
  }
}

// Refactored

function sumZeroRefactored(arr) {
  let leftPoint = 0;
  let rightPoint = arr.length - 1;

  while (leftPoint < rightPoint) {
    let sum = arr[leftPoint] + arr[rightPoint];
    if (sum === 0) {
      return [arr[leftPoint], arr[rightPoint]];
    } else if (sum > 0) {
      rightPoint--;
    } else {
      leftPoint++;
    }
  }
}

console.log(sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 5]));

// Count Unique Values
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let uniqueValueCounts = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) uniqueValueCounts++;
  }

  return uniqueValueCounts;
}

// Refactored

function countUniqueValuesRefactored(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      console.log(arr);
    }
    console.log(i, j);
  }
  return i + 1;
}

console.log(countUniqueValuesRefactored([-2, -1, -1, 0, 1]));
