// Access the first argument
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg);

// Check if the result is a valid integer
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}
