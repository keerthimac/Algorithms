const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  let newArr = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    console.log(`smallest index is ${arr[smallest]}`);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
};

myList = [5, 3, 6, 2, 10];

console.log(selectionSort(myList));
