// Access the arguments directly using process.argv[2] (the first argument passed after the script name)
if (process.argv[2] === undefined) {
    console.log("No argument");
} else {
    console.log(process.argv[2]);
}
