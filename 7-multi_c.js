// Get the first argument passed to the script
const x = parseInt(process.argv[2]);

// Check if the argument is a valid number and is greater than 0
if (isNaN(x) || x <= 0) {
    console.log("Missing number of occurrences");
} else {
    // Loop to print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
