// 3. sameFrequency - 빈도수 세기
// one loop -> O(N)

function sameFrequency(num1, num2) {
  let numStr1 = String(num1);
  let numStr2 = String(num2);

  if (numStr1.length !== numStr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of numStr1) {
    frequencyCounter1[val] ? (frequencyCounter1[val] += 1) : (frequencyCounter1[val] = 1);
  }

  for (let val of numStr2) {
    frequencyCounter2[val] ? (frequencyCounter2[val] += 1) : (frequencyCounter2[val] = 1);
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

// 4. areThereDuplicates - 다중 포인터

function areThereDuplicates(...args) {
  let i = 0;

  let uniqueCount = 0;

  for (let j = 1; j < args.length; j++) {
    if (args[i] !== args[j]) {
      i++;
    } else {
      uniqueCount++;
    }
  }
  console.log(uniqueCount);
  return uniqueCount > 0 ? true : false;
}

// 4. solution

// 4. - 1 빈도수 세기
function areThereDuplicatesSol1() {
  let collection = {};

  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments] || 0) + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

// 4. - 2 다중 포인터

function areThereDuplicatesSol2() {
  // Two pointers
  args.sort((a, b) => a - b);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false;
}

// 4. - 2 One Liner Solution

function areThereDuplicatesSol3() {
  return new Set(arguments).size !== arguments.length;
}

// 5. averagPair 다중 포인터

function averagePair(arr, avg) {
  if (arr.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === avg) {
        return true;
      }
    }
  }

  return false;
}

// 5. solution

function averagePairSol(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }

  return false;
}

// 6. isSubsequence

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
}

// 6. solution
// isSubsequence("", "hello") , true
// It should return true because an empty string is a subsequence of any string.

// 6. - 1 반복

function isSubsequenceSol1(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return false;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// 6. - 2 공간이 아닌 재귀 O(1)

function isSubsequenceSol2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequenceSol2(str1.slice(1), str2.slice(1));
  return isSubsequenceSol2(str1, str2.slice(1));
}

// 6. - strudent solution
function isSubsequenceSol3(str1, str2) {
  let count = 0;

  for (let c of str2) {
    if (str1[count] === c) count++;
  }

  return str1.length === count;
}

// 7. maxSubarraySum - Sliding Window

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// 8. minSubarrayLen - Sliding Window -??

function minSubarrayLen(arr, num) {
  for (let val of arr) {
    if (val >= num) return [val].length;
  }

  let start = 0;
  let end = 1;
  let tempSum = arr[start] + arr[end];

  while (end < arr.length) {
    tempSum += arr[end];
    if (tempSum >= num) return [arr[start], arr[end]].length;
    start++;
    end++;
  }

  return 0;
}

// 9. findLongestSubstring - Sliding Window

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) start = Math.max(start, seen[char]);

    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log('----------------------');
    console.log('seen', seen);
    console.log('i', i);
    console.log('longest', longest);
    console.log('start', start);
  }

  return longest;
}
