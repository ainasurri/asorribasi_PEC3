//Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.
function printArray(array) {
    console.log(array.join(", "));
}
var array = [2, 3, 4];
console.log(array.shift()); //2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.pop()); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
var everyisgreater = array.every(function (element) { return element > 3; }); /** check if every number is greater than 3 */
console.log(everyisgreater); //false
var everyisless = array.every(function (element) { return element < 10; }); /** check if every number is less than 10 */
console.log(everyisless); //true
console.log(array.sort(function (a, b) { return a - b; })); //1,3,4,8
console.log(array.sort(function (a, b) { return b - a; })); //8,4,3,1
