// Algorithm: Insertion Sort with 2 Counters

// 1. Create an array to be sorted.
// 2. Loop through the array from index 1 to length-1:
//    a. Assign the current element at index i to a variable called "key".
//    b. Assign the counter "j" to the value of (i-1).
//    c. While "j" is greater than or equal to 0 and the element at index "j" is greater than "key":
//       i. Move the element at index "j" to the right by assigning it to the element at index (j+1).
//       ii. Decrement "j" by 1.
//    d. Assign the "key" to the element at index (j+1).
// 3. Print the sorted array.

// Insertion Sort with 2 Counters
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log("Original Array: " + array);
const sortedArray = insertionSort(array);
console.log("Sorted Array: " + sortedArray);
