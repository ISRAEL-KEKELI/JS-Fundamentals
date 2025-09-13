#!/usr/bin/node

// Define the recursive function to compute the factorial
function factorial (n) {
  // If n is not a number or is less than or equal to 1,
  // the factorial is 1. This is the base case for the recursion.
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Otherwise, use the recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Get the first command-line argument, parse it as an integer, and compute the factorial
const num = parseInt(process.argv[2]);
const result = factorial(num);

// Print the result
console.log(result);
