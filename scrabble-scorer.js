// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


// const simpleScorePointStructure = {
//    1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// }


// const vowelScoreStructure = {
//    1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
//    3: ['A', 'E', 'I', 'O', 'U']
// }

let newPointStructure = transform(oldPointStructure);


function newScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++)
			letterPoints += `Letter '${word[i]}': ${newPointStructure[word[i]]}\n`
	  
	return letterPoints;
 };





function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
      
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

 let alphabet = "abcdefghijklmnopqrstuvwxyz";

 function simpleScorer(word) {
   let score = 0
 
   for(let letter of word.toLowerCase()){
     if (alphabet.includes(letter))
     score += 1;
   }
   return score;
 };
 
 let constinents = "bcdfghjklmnpqrstvwxyz";
 let vowels = "aeiou"
 
  function vowelBonusScorer(word) {
    let score = 0
  
    for(let letter of word.toLowerCase()){
      if (constinents.includes(letter))
      score += 1;
      if (vowels.includes(letter))
      score += 3;
    } 
    return score;
  };


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userInput = ""


function initialPrompt() {
userInput = input.question("Let's play some scrabble! Enter a word: ");
// console.log(oldScrabbleScorer(userInput));
// console.log(simpleScorer(userInput));
// console.log(vowelBonusScorer(userInput));
// console.log(newScrabbleScorer(userInput));
};






function scrabbleScorer(word) {
   let score = 0
   for(let letter of word.toLowerCase()){
     score += (newPointStructure[letter]);
   } 
   console.log(score)
   return score;
 };


 const scoringAlgorithms = [
   {
     name: "Simple Score",
     description: "Each letter is worth 1 point.",
     scorerFunction: simpleScorer
   },
     {
       name: "Bonus Vowels",
       description: "Vowels are worth 3 points, consonants are 1 point.",
       scorerFunction: vowelBonusScorer
     },
     {
       name: "Scrabble",
       description: "The traditional scoring algorithm.",
       scorerFunction: scrabbleScorer
     }
 ]



function scorerPrompt() {
let scoreSelection = ""
scoreSelection = input.question(`Which scoring algorithm would you like? \n0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `);
 
  
 
  if (scoreSelection === "0"){
  console.log(scoringAlgorithms[0].scorerFunction(userInput));
  } if (scoreSelection === "1"){
   console.log(scoringAlgorithms[1].scorerFunction(userInput)); 
  } if (scoreSelection === "2"){
   console.log(scoringAlgorithms[2].scorerFunction(userInput)); 
  }
//   {
//    while loop for invalid response, try again.
//   }
}


function transform(oldPointStructure) {
      let newPointStructure = {};
    
      for (key in oldPointStructure) {
        for (value of oldPointStructure[key])
     {   newPointStructure[value.toLowerCase()] = Number(key); 
     }
    };
    return newPointStructure
  };


// let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
// ALL DONE!!