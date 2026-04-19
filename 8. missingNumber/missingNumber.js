// input = [2, 5, 0, 1, 4]
// we have to find the missing number in the array ranging [0, n]
// n could be any number from 0 to 10^4

const input = [2, 5, 0, 1, 4];

const missingNumber = (arr, n) => {
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
};

console.log(missingNumber(input, 5));
