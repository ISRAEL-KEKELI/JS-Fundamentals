// Define the add function that takes two arguments
function add(a, b) {
    return a + b;
}

// Convert the arguments to integers and call the add function
const result = add(parseInt(process.argv[2]), parseInt(process.argv[3]));

// Print the result (NaN will be printed if the arguments are not valid integers)
console.log(result);
