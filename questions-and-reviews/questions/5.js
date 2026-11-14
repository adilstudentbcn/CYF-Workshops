function isMultipleOfTen(number) {
  if (number % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.assert(
  isMultipleOfTen(80) === true,
  `current output: ${isMultipleOfTen(80)}, target output: true`,
);

//console.log(isMultipleOfTen(50));
