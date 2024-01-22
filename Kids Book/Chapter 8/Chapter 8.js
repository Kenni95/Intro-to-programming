//The Basic Anatomy of a Function

let ourFirstFunction = function () {
    console.log("Hello Everyone!");
    };

    ourFirstFunction();

    //Passing Arguments into Functions

let sayHelloTo = function (name) {
        console.log("Hello " + name + "!");
        };

        sayHelloTo("Kenny");

        sayHelloTo("Lyra");

        let sayGoodMorningTo = function (name) {
            console.log("Good Morning " + name + "!");
            };

            sayGoodMorningTo("Kenn")
            sayGoodMorningTo("Milly")
            sayGoodMorningTo("Mohau")

 // Printing Cat Faces = how many times to do something.

 var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
    }
    };
    drawCats(7);

    //Passing Multiple Arguments to a Function

    let printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "-_-" + "(^_^)" ); }};

        printMultipleTimes(5, "(^_^)");
        printMultipleTimes(7)
        

        //Returning Values From Functions

       console.log (9 + Math.floor(1.2345));

       let double = function (number) {
        return number * 2;
       }
      console.log ( double(10));

      //Using Functions Calls as Values

console.log(double(2) + double (6))

double (double(2));

//Using Functions to simplify Code

//Funtion picking a random word

//randomWords [Math.floor(Math.random() * randomWords.length)]

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

let randomWords = ["Planet", "Worm", "Flower", "Computer"];
console.log(pickRandomWord(randomWords));

let pickRandom = ["Charlie", "Raj", "Nicole", "Kate", "Sandy"];
console.log(pickRandomWord(pickRandom));

//A Random Insult Generator

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomterm = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// Join all the random strings into a sentence:

var randomString = "Your " + pickRandomWord(randomBodyParts) +
" is like a " + pickRandomWord(randomAdjectives) +
" " + pickRandomWord(randomterm) + "!!!";

console.log(randomString)

//Making a Random Insult Generator Into a Function

generateRandoInsult = function () {
    let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomterm = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomString = "Your " + pickRandomWord(randomBodyParts) +
" is like a " + pickRandomWord(randomAdjectives) +
" " + pickRandomWord(randomterm) + "!!!";

return randomString
}

console.log(generateRandoInsult());
console.log(generateRandoInsult());
console.log(generateRandoInsult());

//Leaving a function early with return 

let fithLetter = function (name) {
    if (name.lenght < 5) {
    return
    }
    return "The fith letter of your name is " + name[4] + ".";
};
console.log(fithLetter("Nick"));

