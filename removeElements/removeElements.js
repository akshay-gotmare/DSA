// array = [3, 1, 5, 5, 2, 1, 6, 3, 2, 7]
// remove all the occurrences of a given value in-place and return the new length of the array
// order of elements should be preserved
// expected output = [3, 1, 5, 5, 2, 1, 6, 3, 2, 7] => remove all the occurrences of '5' => [3, 1, 2, 1, 6, 3, 2, 7, _, _] => length = 8

// we will be using 2 pointer approach
// 'x' will be poining the unique element
// 'i' will traverse through the array and check if 'arr[i]!=value_to_be_removed'
// when 'arr[i]!=value_to_be_removed' -> arr[x]=arr[i] -> x++

const input = [3, 1, 5, 5, 2, 1, 6, 3, 2, 7];
const val = 5;

const removeElements = (arr, val) => {
  let x = 0;                                    // start with 0t place

  for (let i = 0; i < arr.length; i++) {        // traverse i through array
    if (arr[i] != val) {                        // check if value at 'i' is not the VALUE to be removed
      arr[x] = arr[i];                          // set the value at 'x' to be the unique value
      x += 1;                                   // increment x by 1
    }
  }
  return arr;
};

console.log(removeElements(input, val));
