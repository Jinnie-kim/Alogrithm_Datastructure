function countDownRecursive(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function countDownIterative(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// iterative solution
function facotrialIterative(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

// recursive solution
function facotrialRecursive(num) {
  if (num === 1) return 1;
  return num * facotrialRecursive(num - 1);
}
