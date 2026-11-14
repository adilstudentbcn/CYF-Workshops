# Code comprehension

Remember to **preview a markdown file** on your computer you can do:
Ctr + Shift + V (Windows/Linux) or CMD + Shift + V (Mac)

Consider the code in this program below:

```js
function calculateSum(a, b) {
  return a + b;
}

function logSum(a, b) {
  console.log(a + b);
}

const result1 = calculateSum(10, 32);
const result2 = logSum(10, 32);
```

a) what will `result1` evaluate to? Explain your answer
b) What will `result2` evaluate to? Explain your answer
c) Try to summarise the main difference between `logSum` and `calculateSum`

// result1 = 42 because we call the function calculateSum that takes 2 parameters a and b and does the sum of the two.

// log to the console the number 42 because the func logSum takes 2 parameters a and b and log the sum of the two to the console.

// calculateSum simply does the sum of 2 parameters and logSum has an extra function of loging the sum to the console.
