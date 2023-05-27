/* ----------------------------- Return ----------------------------- */
/* Fragmento de código 1 */
/* Diagrama T:
  SIN VARIABLES
*/

function hello() {
  console.log('hello');
}
hello();
console.log('Dojo');

// hello
// Dojo

/* Fragmento de código 2 */
/* Diagrama T:
  result = 15
*/

function hello() {
  console.log('hello');
  return 15;
}
var result = hello();
console.log('result is', result);
// hello, hello
// result is 15

/* Fragmento de código 3 */
/* Diagrama T:
  result = 18
*/

function numPlus(num) {
  console.log('num is', num);
  return num + 15;
}
var result = numPlus(3);
console.log('result is', result);

// num is 3
// result is 18

/* Fragmento de código 4 */
/* Diagrama T:
  num = 15
  num2 = 10
  result = 10
*/

var num = 15;
console.log(num);
function logAndReturn(num2) {
  console.log(num2);
  return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

// 15
// 10
// 10
// 15

/* Fragmento de código 5 */
/* Diagrama T:
  num = 15
  num2 = 10
  result = 20
*/

var num = 15;
console.log(num);
function timesTwo(num2) {
  console.log(num2);
  return num2 * 2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

// 15
// 10
// 20
// 15

/* Fragmento de código 6 */
/* Diagrama T:
  num = 3
  num = 5
  result = 16
*/

function timesTwoAgain(num) {
  console.log('num is', num);
  var y = num * 2;
  return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

// num is 3, num is 5
// result is 16

/* Fragmento de código 7 */
/* Diagrama T:
  num = 2
  num2 = 3
  num = 3
  num2 = 5
*/

function sumNums(num1, num2) {
  return num1 + num2;
}
console.log(sumNums(2, 3));
console.log(sumNums(3, 5));

// 5
// 8

/* Fragmento de código 8 */
/* Diagrama T:
  num1 = 2
  num2 = 3
  num1 = 3
  num2 = 5
*/

function printSumNums(num1, num2) {
  console.log(num1);
  return num1 + num2;
}
console.log(printSumNums(2, 3));
console.log(printSumNums(3, 5));
// 2, 3
// 5
// 8

/* Fragmento de código 9 */
/* Diagrama T:
  sum = 5
  sum = 8
*/

function sumNums(num1, num2) {
  var sum = num1 + num2;
  console.log('sum is', sum);
  return sum;
}
var result = sumNums(2, 3) + sumNums(3, 5);
console.log('result is', result);

// result is 13

/* Fragmento de código 10 */
/* Diagrama T:
  sum = 5
  sum = 6
  sum = 8
*/

function sumNums(num1, num2) {
  var sum = num1 + num2;
  console.log('sum is', sum);
  return sum;
}
var result =
  sumNums(2, 3) + sumNums(3, sumNums(2, 1)) + sumNums(sumNums(2, 1), sumNums(2, 3));
console.log('result is', result);

// sum is 5, sum is 6, sum is 8
// result is 19
