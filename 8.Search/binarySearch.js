function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end && arr[middle] !== value) {
    if (arr[middle] > value) end = middle - 1;
    if (arr[middle] < value) start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === value ? middle : -1;
}
