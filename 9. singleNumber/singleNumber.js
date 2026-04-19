// input = [2, 3, 2, 4, 4]
// we have to find the number that appears only once in the array
// output = 3 as it is the only number that appears once in the array

// we can use the XOR operator to find the single number in the array
// the XOR operator will return 0 if we XOR two identical numbers
// and it will return the number itself if we XOR a number with 0

const input = [2, 3, 2, 4, 4];

const singleNumber = (arr) => {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }

  return xor;
};

console.log(singleNumber(input));
