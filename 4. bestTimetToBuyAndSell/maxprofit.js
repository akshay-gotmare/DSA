// array = [7, 1, 5, 3, 6, 4]
// find the maximum profit that can be achieved by buying and selling a stock on different days
// expected output = 5 (buy at 1 and sell at 6)
// we will be using 2 pointer approach

const input = [7, 1, 5, 3, 6, 4];
const input1 = [2, 4, 5, 7, 1, 8];

const maxProfit = (arr) => {
  let min = 0;                              // set min pointer to the first array value
  let maxProfit = 0;                        // set maxProfit -> 0 

  for (let i = 1; i < arr.length; i++) {    // traverse 'i' through the array (i starts from 2nd value)
    if (arr[i] - arr[min] > maxProfit) {    // check if the maxProfit is greater
      maxProfit = arr[i] - arr[min];        // if greater then update the maxProfit
    }
    if (arr[i] < arr[min]) {                // if current element is smaller than the minimum element
      min = i;                              // update the minimum element to be the current element
    }
  }
  return maxProfit;
};

console.log(maxProfit(input));
console.log(maxProfit(input1));
