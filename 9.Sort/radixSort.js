function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(numsArr) {
  let maxDigits = 0;

  for (let i = 0; i < numsArr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numsArr[i]));
  }

  return maxDigits;
}

function radixSort(numsArr) {
  let maxDigitsCount = mostDigits(numsArr);

  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numsArr.length; i++) {
      let digit = getDigit(numsArr[i], k);
      digitBuckets[digit].push(numsArr[i]);
    }
    console.log(digitBuckets);
    numsArr = [].concat(...digitBuckets);
    console.log(numsArr);
    console.log('--------------------------');
  }

  return numsArr;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
