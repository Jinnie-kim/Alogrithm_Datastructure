// 내 풀이
const twoSumA = function (nums, target) {
  // make an array to return at the end
  const result = [];

  // loop over nums array to find indices whose sum to the target number
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      let a = nums[i];
      let b = nums[j];
      if (a + b === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }

  return [0, 1];
};

// answer
const twoSumB = function (nums, target) {
  const numsIndexArr = nums.map((num, idx) => [num, idx]);
  let left = 0;
  let right = nums.length - 1;
  let sortedNums = numsIndexArr.sort((a, b) => a[0] - b[0]);

  while (left < right) {
    const sum = sortedNums[left][0] + sortedNums[right][0];
    if (sum === target) return [sortedNums[left][1], sortedNums[right][1]];
    else if (sum < target) left++;
    else right--;
  }
  return [];
};

// using hashmap
function solution(nums, target) {
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (pairIdx[num]) {
      return [pairIdx[num], i];
    } else {
      pairIdx[num] = i;
    }
  }
}

function solution(nums, target) {
  // 1. Create a hashmap to store the value and its index
  const map = new Map();

  // 2. Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // 3. Calculate the complement of the current element
    const complement = target - nums[i];
    // 4. Check if the complement exists in the map
    if (map.has(complement)) {
      // If it exists, return the indices
      return [map.get(complement), i];
    }

    // If it doesn't exist, add the current element to the map
    map.set(nums[i], i);
  }

  // If no solution is found, return an empry array
  // This line is usually never reached because the problem guarantees on solutions
  return [];
}
