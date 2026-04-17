// input -> num1 = [1, 2, 4, 0, 0, 0], num2 = [2, 3, 5]
// we have num1 and num2 sorted in non-decreasing order
// and we have the size of num1 and num2 -> m and n respectively
// where for example m = 3 and n = 3
// also the gien sie of num1 is m + n -> 6
// so we have to merge num2 into num1 and make num1 sorted in non-decreasing order
// expected output -> num1 = [1, 2, 2, 3, 4, 5]

const num1 = [1, 2, 4, 0, 0, 0];
const num2 = [2, 3, 5];
const m = 3;
const n = 3;

const mergeSortedArrays = (num1, m, num2, n) => {
  let p1 = m - 1;                                           // pointer p1 -> m-1
  let p2 = n - 1;                                           // pointer p2 -> n-1

  for (let i = m + n - 1; i >= 0; i--) {                    // iterate i in reverse from 'm + n - 1'
    if (p2 < 0 || (p1 >= 0 && num1[p1] >= num2[p2])) {
                                    // if num2 array is completly added to num1 or
                                    // if p1 is still iterating the num1 and num1[p1] >= num2[p2]
      num1[i] = num1[p1];                                   // put the greater value to the 'i'th place
      p1--;                                                 // decrement p1 pointer
    } else {
      num1[i] = num2[p2];                                   // add num2[p2] to num1[i] if num2[p2] is greater
      p2--;                                                 // decrement p2 pointer
    }
  }
  return num1;
};

console.log(mergeSortedArrays(num1, m, num2, n));
