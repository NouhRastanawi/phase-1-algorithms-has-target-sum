function hasTargetSum(array, target) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array; j++) {
      sum = array[i] + array[j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}



function hasTargetSum(array, target) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === target) {
        return true;
      }
    }
  }return false;
}

/* 
  Write the Big O time complexity of your function here: O(n^2).
*/

/* 
  Looping through the array two elements at a time (i, j=i+1) and if the sum of them is
  equal to the target then the function should return true, otherwise false; 
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
