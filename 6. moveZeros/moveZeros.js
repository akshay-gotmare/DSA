// input = [0, 1, 0, 3, 12]
// move all the 0's to the end of the array while maintaining the relative order of the non-zero elements
// expected output -> [1, 3, 12, 0, 0]

// we will be using 2 pointer approach
// 'x' will be pointing the unique element
// 'i' will traverse through the array and check if 'arr[i]!=0'
// when 'arr[i]!=0' -> arr[x]=arr[i] -> x++

//             x
//             ↓
const input = [0, 1, 0, 3, 12];
//             ↑
//             i

const moveZeros = (arr) => {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {    // fill the non-zero elements into 'x' position and increment 'x'
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
    }
  }

  for (let i = x; i < arr.length; i++) {    // fill remaining positions with 0's
    arr[i] = 0;
  }
  return arr;
};

console.log(moveZeros(input));
