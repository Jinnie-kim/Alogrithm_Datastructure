// Write a function called same, which acecepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.

function same(arr1, arr2) {
  // first thing you can do to check a little edge case
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Refactored
// We can loop over each array one time individually.

function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// sameRefactored([1, 2, 3], [1, 4, 9]);

// Anagrams
// Given two strings, write a function to determine if the second string is
// an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another
// such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let firstStringObj = {};
  let secondStringObj = {};

  for (let val of str1) {
    firstStringObj[val] = (firstStringObj[val] || 0) + 1;
  }
  for (let val of str2) {
    secondStringObj[val] = (secondStringObj[val] || 0) + 1;
  }

  for (let key in firstStringObj) {
    if (firstStringObj[key] !== secondStringObj[key]) return false;
  }

  return true;
}

// Refactored version

function validAnagramRectored(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagramRectored('anagram', 'nagaram'));
