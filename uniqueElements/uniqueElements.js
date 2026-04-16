// array = [0,0,1,1,1,2,2,3,3,4,5,5]
// Find total number of unique elements in the array
// use inplace algorithm to solve the problem
// order must be preserved
// expected output = [0,1,2,3,4,5,_,_,_,_,_,_] => 6

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5];

const uniqueElements = (arr) => {
  // we will be using 2 pointer approach
  // will have x -> pointing the unique element
  // and i (starting 0th position) -> traversing array checking unique element
  // once unique element is found, arr[i]!=arr[x] -> i will be incremented (i + 1)
  // and the unique element at i will be interchaged with element at new x (arr[x]=arr[i])

  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[x]) {
      x += 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
};

console.log(uniqueElements(input));
