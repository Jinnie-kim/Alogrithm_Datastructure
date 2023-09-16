// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// q&a version
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i));
//   }
// }

// Solution # 1. iterate
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2); // midpoint index
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

// Solution # 2. recursive
function pyramid(n, row = 0, level = '') {
  const midpoint = Math.floor((2 * n - 1) / 2);
  if (n === row) return;
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
