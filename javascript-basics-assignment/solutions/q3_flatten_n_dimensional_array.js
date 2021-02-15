/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
  // Write your code here
  if (Array.isArray(arr)) {
    var newArr = [];
    const flat = (array) => {
      array.map((i) => {
        Array.isArray(i) ? flat(i) : newArr.push(i);
      });
    };
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } else return null;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
