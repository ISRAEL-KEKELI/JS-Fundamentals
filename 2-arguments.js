// Access the process.argv array to get the command-line arguments
const args = process.argv.slice(2); // slice(2) removes the first two default elements (node and script path)

// Check the length of the arguments array
if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
