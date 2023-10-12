// O(n ^ 2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(insertionSort([2, 1, 9, 76, 4]));

// using while loop
function insertSortWhile(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertSortWhile([2, 1, 9, 76, 4]));
