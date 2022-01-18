/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "Dog";
animal['name'] = "Froid";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Auuuuu";
noises.push("Au-au-au"); 
noises.unshift("Ai-ai-ai");
noises[noises.length] = "Rawwwwwww";
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push("kkkk")

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; 
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck)
console.log(animals);
//////////////////////////////////////////////////////////////////////
var animal1 = {
  species: "Bird",
  name: "Ze",
  noises : ["Bem-ti-vi", "fiu-fui"]
};
animals.push(animal1)
////////////////////////////////////////////////////////////////////////
var animal2 = { 
  species: "Cat",
  name: "Bill",
  noises: ["Miau","Mingau"]
};
animals.push(animal2)
///////////////////////////////////////////////////////////////////////
console.log(animals)
//////////////////////////////////////////////////////////////////////
console.log(animals.length)


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Array will be a good data structure  for this project so we can use fixed indexes for access, replacement, to add, delete etc... 
var friends = []; 


function getRandom(array) {
var max = array.length - 1;
var index = Math.floor(Math.random() * max)
    return array[index];
    
};

friends.push(getRandom(animals)['name']);
animals[0]['friends'] = friends;
  
 


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}