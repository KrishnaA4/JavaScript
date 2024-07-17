const readLineSync = require("readline-sync");

const userName = readLineSync.question("May I Know your name");

const age = readLineSync.question("What's is your age??");

console.log(`Your name:${userName}
    Your Age:${age}`);