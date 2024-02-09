let constinents = "bcdfghjklmnpqrstvwxyz";
let vowels = "aeiou"

// const { vowelBonusScorer } = require("./scrabble-scorer");

// vowelBonusScorer doesnt work like simpleScorer does

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
 
 console.log(vowelBonusScorer("elevate"));

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function simpleScorer(word) {
  let score = 0

  for(let letter of word.toLowerCase()){
    if (alphabet.includes(letter))
    score += 1;
  }
  return score;
};

console.log(simpleScorer("hello"));


// // What is pointValue? It was in oldScrabbleScorer

// const newPointStructure = {
//   A: [1],
//   B: [3],
//   C: [3],
//   D: [2],
//   E: [1],
//   F: [4],
//   G: [2],
//   H: [4],
//   I: [1],
//   J: [8],
//   K: [5],
//   L: [1],
//   M: [3],
//   N: [1],
//   O: [1],
//   P: [3],
//   Q: [10],
//   R: [1],
//   S: [1],
//   T: [1],
//   U: [1],
//   V: [4],
//   W: [4],
//   X: [8],
//   Y: [4],
//   Z: [10]
// }



// function newScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++)
//   if (newPointStructure[].includes(word[i])) {
// 			letterPoints += `Letter '${word[i]}': ${newScrabbleScorer.word[i]}\n`
// 		 }
 
	  
// 	return letterPoints;
//  };

//  console.log(newScrabbleScorer("dance"));





// //  const scoringAlgorithms = [oldScrabbleScorer(), simpleScorer(), vowelBonusScorer()];
// // Storing a function in an object in an array??? Is this right???

// const scoringAlgorithms = [
//   {
//     scoringFunction: simpleScorer(),
//     description: "Each letter is worth 1 point.",
//     scoreFunction: 
//     function simpleScorer(word) {
//       let score = 0
    
//       for(let letter of word.toLowerCase()){
//         if (alphabet.includes(letter))
//         score += 1;
//       }
//       return score;
//     }
//   },
//     {
//       scoringFunction: vowelBonusScorer(),
//       description: "Each letter is worth 1 point.",
//       scoreFunction:  function vowelBonusScorer(word) {
//         let score = 0
      
//         for(let letter of word.toLowerCase()){
//           if (constinents.includes(letter))
//           score += 1;
//           if (vowels.includes(letter))
//           score += 3;
//         } 
//         return score;
//       }
//     }  
// ]