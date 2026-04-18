// input = [1, 1, 0, 1, 1, 1, 0, 1]
// find the maximum number of consecutive 1's in the array
// expected output -> 3

// we will be using 2 pointer approach
// 'x' will be pointing the unique element
// 'i' will traverse through the array and check if 'arr[i]!=0'
// when 'arr[i]!=0' -> arr[x]=arr[i] -> x++
// when 'arr[i]==0' -> x=0

const input = [1, 1, 0, 1, 1, 1, 0, 1];

const maxConsecutiveOnes = (arr) => {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
      if (count > maxCount) maxCount = count;
    } else count = 0;
  }
  return maxCount;
};

console.log(maxConsecutiveOnes(input));
