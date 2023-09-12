// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My version
// function anagrams(stringA, stringB) {
//   const wordA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const wordB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   if (wordA.length !== wordB.length) return false;

//   const frequencyCounterA = {};
//   const frequencyCounterB = {};

//   for (let char of wordA) {
//     frequencyCounterA[char] ? (frequencyCounterA[char] += 1) : (frequencyCounterA[char] = 1);
//   }

//   for (let char of wordB) {
//     frequencyCounterB[char] ? (frequencyCounterB[char] += 1) : (frequencyCounterB[char] = 1);
//   }

//   for (let key in frequencyCounterA) {
//     if (!(key in frequencyCounterB)) return false;
//     if (!(frequencyCounterA[key] === frequencyCounterB[key])) return false;
//   }

//   return true;
// }

// Solution # 1.
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }

//   return true;
// }

// // helper function
// function buildCharMap(string) {
//   const charMap = {};

//   for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// Solution # 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// helper function
function cleanString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
