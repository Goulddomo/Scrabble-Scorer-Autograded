// let consonants = "bcdfghjklmnpqrstvwxyz";
// let vowels = "aeiou"

// const { transform, newPointStructure } = require("./scrabble-scorer");

// const { vowelBonusScorer } = require("./scrabble-scorer");

// vowelBonusScorer doesnt work like simpleScorer does

//  function vowelBonusScorer(word) {
//    let score = 0
 
//    for(let letter of word.toLowerCase()){
//      if (consonants.includes(letter))
//      score += 1;
//      if (vowels.includes(letter))
//      score += 3;
//    } 
//    return score;
//  };
 
//  console.log(vowelBonusScorer("elevate"));

// let alphabet = "abcdefghijklmnopqrstuvwxyz";

// function simpleScorer(word) {
//   let score = 0

//   for(let letter of word.toLowerCase()){
//     if (alphabet.includes(letter))
//     score += 1;
//   }
//   return score;
// };

// console.log(simpleScorer("hello"));


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
//   // is it a valid letter, not a number
//   // if (newPointStructure.includes(word[i])) {
// 			letterPoints += `Letter '${word[i]}': ${newPointStructure[word[i]]}\n`
// 		//  }
 
	  
// 	return letterPoints;
//  };

//  console.log(newScrabbleScorer("dance"));





// //  const scoringAlgorithms = [oldScrabbleScorer(), simpleScorer(), vowelBonusScorer()];
// // Storing a function in an object in an array??? Is this right???

// const scoringAlgorithms = [
//   {
//     name: "Simple Score",
//     description: "Each letter is worth 1 point.",
//     scorerFunction: simpleScorer
//   },
//     {
//       name: "Bonus Vowels",
//       description: "Vowels are worth 3 points, consonants are 1 point.",
//       scorerFunction: vowelBonusScorer
//     },
//     {
//       name: "Scrabble",
//       description: "The traditional scoring algorithm.",
//       scorerFunction: oldScrabbleScorer
//     }
// ]



// const object = { a: 1, b: 2, c: 3 };
// for (const [key, value] of Object.entries(object)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }

  // iterate through (keys in object)
  // for each key separate each value of that key and make it its own key in the newobj. Push?
  // assign that old key to be the new value to the letter keys

// function transform(object) {
//   const oldPointStructure = {
//     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//     2: ['D', 'G'],
//     3: ['B', 'C', 'M', 'P'],
//     4: ['F', 'H', 'V', 'W', 'Y'],
//     5: ['K'],
//     8: ['J', 'X'],
//     10: ['Q', 'Z']
//   };
  
//   // function transform(oldPointStructure) {
//   let newPointStructure = {};
  
//   for (key in oldPointStructure) {
//   // console.log(`Key: ${key}`);
//  for (value of oldPointStructure[key])
//  {
//   // find the variables needed to produce each value for the new object
//   newPointStructure[value] = key; 
// }
    // console.log(`Value: ${value}`);
  // newPointStructure[value] = key;
  // console.log(newPointStructure)
  // };
  // console.log(newPointStructure)
  // // for (value of key) {
  
// };

// newPointStructure = transform(oldPointStructure)




const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

  function trans(oldPointStructure) {
    let newPointStructure = {};
  
    for (key in oldPointStructure) {
      for (value of oldPointStructure[key])
   {   newPointStructure[value] = key; 
   }
  };
  return newPointStructure
};

newStructure = trans(oldPointStructure);
// console.log(newStructure);


// loop through each letter of the word
// if letter matches key of newStructure add the value associated with that key to the score


function scrabbleScorer(word) {
  let score = 0
  for(let letter of word.toUpperCase()){
    // if (letter === newStructure[key])
    score += Number(newStructure[letter]);
  } 
  return score;
};

 console.log(scrabbleScorer("elevate"));