// 10. power
// while execute recursive function, subtract 1 from times
// when times hit 0, then it return 1. That's the base case.
function power(n, time) {
  if (time === 0) return 1;

  return n * power(n, time - 1);
}

// 11. factorial
// base case:
// 1. you sould consider the case when num is 0.
function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

// 12. productOfArray
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

// 13. recursiveRange
function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

// 14. fib
function fib(num) {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
