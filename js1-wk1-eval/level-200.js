// Part 1: Without running code,
// Use documentation to evaluate Math.trunc() and Math.floor() for each of the numbers below.
// Write your answers down below:

// a) 10.53   For example, Math.trunc(10.53) evaluates to 10, Math.floor(10.53) evaluates to 10
// b) 170.105   170
// c) -0.34    -1  and  0
// d) -8.921    -9 and  -8

// Part 2: Use the Node REPL to check your answers to Part 1)

// floor  vs trun with negative numbers.
let floor = Math.floor(-0.3);
let trunc = Math.trunc(-0.3);
console.log(`Math.floor ${floor}`);
console.log(`Math.trunc ${trunc}`);

// Part 3: Using Part 2, explain the difference between Math.trunc() and Math.floor() in your own words

// .trunc() method chops off the decima part.
//.round() method rouns downs the number. note -1.4 becomes -2.

//node level-200.js
