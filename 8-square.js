// Get the size of the square from the first argument
const size = parseInt(process.argv[2]);

// Check if the size is a valid integer greater than 0
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    // Loop to print the square (each row contains 'size' X's)
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size)); // Repeat 'X' 'size' times
    }
}
