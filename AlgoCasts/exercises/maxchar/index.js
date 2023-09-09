// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My version
// function maxChar(str) {
//   let strObj = {};

//   for (let char of str) {
//     strObj[char] ? (strObj[char] = strObj[char] + 1) : (strObj[char] = 1);
//   }

//   return Object.keys(strObj).reduce((a, b) => (strObj[a] > strObj[b] ? a : b));
// }

// Solution #1
function maxChar(str) {
  const charMap = {};

  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] ? (charMap[char] = charMap[char] + 1) : (charMap[char] = 1);
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
