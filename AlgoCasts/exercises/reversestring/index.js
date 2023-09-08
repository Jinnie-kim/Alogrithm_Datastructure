// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My version
// function reverse(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// Solution #1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution #2
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution #3
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '');
// }

module.exports = reverse;
