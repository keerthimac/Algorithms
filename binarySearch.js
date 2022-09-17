const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  console.log(low, high);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(`current mid position is ${mid}`);
    let guess = list[mid];
    console.log(`current guessed number is ${guess}`);
    if (guess == item) {
      return `your Guessed number is ${list[mid]}`;
    }
    if (guess > item) {
      high = mid - 1;
      console.log(`new high position is ${high}`);
    } else {
      low = mid + 1;
      console.log(`new low position is ${low}`);
    }
  }
};

myList = [1, 3, 5, 7, 9];
myList1 = [
  1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];

console.log(binarySearch(myList1, 12));
