let selectedColors = ["red", "blue", "green"]
console.log(selectedColors [2]);
selectedColors = "yellow";
console.log(selectedColors);

let dinosaurs = [
"T-Rex",
"Velociraptor",
"Stegosaurus",
"Triceratops",
"Brachiosaurus",
"Pteranodon",
"Apatosaurus",
"Diplodocus",
"Compsognathus", 
]; 

console.log("/////////////////////");


console.log ("List of Dinosaurs = " + dinosaurs)
console.log ("identifying the index of Dipclodocus = " + dinosaurs [7])
console.log ("My favourite dinosaur in the list =" + dinosaurs[0])

console.log("/////////////////////");

// Setting or Changing Elements in an Array

dinosaurs[0] = "Tyrannosaurus Rex";

console.log("Changing Elements in an Array = " + dinosaurs);

dinosaurs[0] = "Mohau";
dinosaurs[1] = "Mathapelo";
dinosaurs[2] = "Derah";
dinosaurs[3] = "Mahoota";
dinosaurs[4] = "Kadi";
dinosaurs[5] = "Mani";
dinosaurs[6] = "Ma Masilu";
dinosaurs[7] = "Don";
dinosaurs[8] = "kenn";
dinosaurs[9] = "34765";
dinosaurs[10] = "Philosoraptor";


console.log("Numbering of my arrays = " + dinosaurs)

// Mixing Data Types in an Array

let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops",
"stegosaurus", 3627.5], 10];

console.log ("returns the entire array = " + dinosaursAndNumbers[2])
console.log ("findind second element in an array = " + dinosaursAndNumbers[2][0])

console.log("/////////////////////");

//Length of an Array

var maniacs = ["Yakko", "Wakko", "Dot"];

maniacs[0];
"Yakko"
maniacs[1];
"Wakko"
maniacs[2];
"Dot"

console.log("Number of Elements in an Array = " + maniacs.length)
console.log("length = " + "Yakko".length)
console.log("access the last element in array = " + [maniacs.length - 1])

//Adding Elements to an end of an Array
const animals = ["Cat", "Dog", "Monkey"];

console.log(animals);

console.log(animals.push(5))
console.log(animals.push("Birds"))

console.log("removes last element in an array = " + animals.pop())

//Adding Elements to the beginning of an Array

console.log (animals.unshift("Eagle"));
console.log (animals.unshift(1))

console.log("removes the first element on the beginning of an array = " + animals.shift());

//Adding two arrays to make a new, single array,

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];

console.log(furryAnimals);

var scalyAnimals = ["Boa Constrictor", "Godzilla"];

console.log(scalyAnimals);

var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;

console.log(furryAndScalyAnimals)

// Join moren than two arrays

console.log("Join More Than Two Arrays");

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
console.log(furryAnimals);

var scalyAnimals = ["Boa Constrictor", "Godzilla"];
console.log (scalyAnimals);

var featheredAnimals = ["Macaw", "Dodo"];
console.log(featheredAnimals);

var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
console.log(allAnimals);

//Finding the Index of an Element in an Array

var colors = ["red", "green", "blue"];
console.log(colors);

console.log(colors.indexOf("blue"));
console.log(colors.indexOf("purple"));

//Element Appearing more than once

var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
console.log(insects.indexOf("Bee"));

//Turning an Array into a String

var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
console.log ("Printing an Array = " + boringAnimals);

console.log (boringAnimals.join());

var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];

//.join(separator)

console.log(boringAnimals.join("-"));
console.log(boringAnimals.join("*"));
console.log(boringAnimals.join( " sees " ));

//Ask for help in adding quotation marks. 

var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
console.log(myNames);
console.log(myNames.join(''));

var ages = [11, 14, 79];
console.log(ages);
console.log (ages.join(" "));

//Finding Your Way Home

var landmarks = [
"My house",
 "Front Path",
"Flickering Streetlamp",
"Leaky Fire Hydrant",
"Fire Station",
"Cat Rescue Center",
"My Old School",
"My Friend's house",
];
console.log(landmarks);

console.log(landmarks.push("My house"));
console.log(landmarks.push("Front path"));
console.log(landmarks.push("Flickering streetlamp"));
console.log(landmarks.push("Leaky fire hydrant"));
console.log(landmarks.push("Fire station"));
console.log(landmarks.push("Cat rescue center"));
console.log(landmarks.push("My old school"));
console.log(landmarks.push("My friend's house")); 

console.log(landmarks.pop());

console.log(landmarks.pop());

console.log(landmarks.pop());

console.log(landmarks.pop());

console.log(landmarks.pop());

console.log(landmarks.pop());

console.log(landmarks.pop());

console.log(landmarks.pop());

//Decision Maker
//Using Math.random

console.log(Math.random());

console.log(Math.random());

console.log(Math.random());

console.log(Math.random());

console.log(Math.random());

console.log(Math.random());

//Rounding Down with Math.floor()

console.log(Math.floor(3.7463463));
console.log(Math.floor(9.9999));
console.log(Math.floor(0.793423451963426));

//

console.log(Math.floor(Math.random() * 4));

var randomWords = ["Love", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndex]);

console.log(randomWords[Math.floor(Math.random() * 4)]);

var phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
    ];

    console.log(// Should I have another milkshake?
    phrases[Math.floor(Math.random() * 5)]);

console.log(// Should I do my homework?
phrases[Math.floor(Math.random() * 5)]);

//Creating a Random Insult Generator

var randomBodyParts = ["Face", "Nose", "Hair"];
console.log(randomBodyParts);

var randomAdjectives = ["Smelly", "Boring", "Stupid"];
console.log(randomAdjectives);

var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
console.log(randomWords);

console.log(// Pick a random body part from the randomBodyParts array:
randomBodyParts[Math.floor(Math.random() * 3)]);

console.log(// Pick a random adjective from the randomAdjectives array:
randomAdjectives[Math.floor(Math.random() * 3)]);

console.log(// Pick a random word from the randomWords array:
randomWords[Math.floor(Math.random() * 5)]);

console.log(// Join all the random strings into a sentence:
"Your " + randomBodyParts + " is like a " + 
randomAdjectives + " skin " + randomWords + "!!!");