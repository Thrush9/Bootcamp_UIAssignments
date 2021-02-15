/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
  // Write my code here
    str ='';
    if (n == '' || n == null) return str;
    for (var i = 1; i <=n; i++) {
      var myval = " ".repeat(n-i);
      var myval1 = " *".repeat(i);
       str +=  (myval + myval1 ) + '  \n';
    }
  return str;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
