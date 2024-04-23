#! /usr/bin/env node
import inquirer  from "inquirer";
import chalk from "chalk";

// display a colourful message
console.log(chalk.bold.cyanBright("\n \t\t  Code With Rabia- Word Counter\n\t"));
console.log("=".repeat(60));

// prompt the user to enter a sentence
let answers= await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }

])
// Triming the sentence and splitting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

//analysis of user input sentence

console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));