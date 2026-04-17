//  array = ['a', 'k', 's', 'h', 'a', 'y']
// reverse the string/array elements in-place (space-complexity) O(1)
// solving by 2 pointer
// result -> ['y', 'a', 'h',  's', 'k', 'a']

const input = ["a", "k", "s", "h", "a", "y"];

const reverseString = (arr) => {
  let x = arr.length - 1;
  let temp = "";
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {    // run array till the middle element
    temp = arr[i];                                          // store the value at 'i' in temp   
    arr[i] = arr[x];                                        // set the value at 'i' to be the value at 'x'
    arr[x] = temp;                                          // set the value at 'x' to be the value stored in temp
    x -= 1;                                                 // decrement 'x' by 1
  }

  return arr;
};

console.log(reverseString(input));
