// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My version
// function palindrome(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed === str;
// }

// Solution #1 - most easiest, kind a direct or the most compact one
// function palindrome(str) {
//   let reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// Solution #3
function palindrome(str) {
  return str.split('').every((char, i) => {
    console.log('char', char);
    console.log('str[str.length - i -1]', str[str.length - i - 1]);
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
