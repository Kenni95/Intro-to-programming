console.log ("12345 + 56789 : " + (12345 + 56789));

console.log ("22 + 33 + 44: " + (22 + 33 + 44));

console.log ("1000 - 17: " + (1000 - 17));

console.log ("123 * 456: " + (123 * 456));

console.log ("12345 / 250: " + (12345 / 250));

console.log ("1234 + 57 * 3 - 31 / 4: " + (1234 + 57 * 3 - 31 / 4));

// Variables

var age = 12 
console.log("age " + age);

var age = 13
console.log("age " + age);

var numberOfSiblings = 1 + 3;
var numberOfCandies = 8;

console.log("How many candies each sibling gets = " + numberOfCandies / numberOfSiblings); 

// Creating New Variables Using Math

console.log("HOW OLD I AM IN SECONDS>>>>>");
var secondsInAMinute = 60;

console.log ("seconds In An Hour: " + (secondsInAMinute * secondsInAMinute));

var hoursInADay = 24;
var secondsInHour = 3600;
console.log ("Seconds In A Day: " + hoursInADay * secondsInHour)

var daysInAYear = 365;
var secondsInADay = 86400;
console.log("Seconds In A Year: " + daysInAYear * secondsInADay);

var age = 28;
var secondsInAYear = 914544000
console.log ("How old I am In Seconds:" + (age * secondsInAYear));

//Incrementing and Decrementing
var highFives = 0;
console.log(++highFives);
console.log(++highFives);
console.log(--highFives);

//Plus/ Minus-equals

var x = 10;
console.log ("x + 5 = " + (x + 5));

var score = 10;
score += 7;
score -= 3;

console.log("10 + 7 - 3 " + (10 + 7 - 3)); 

//  Trying it

var balloons = 100;
balloons *= 2;
console.log("100 * 2 = " + 100 * 2)

var balloons = 100;
balloons /= 4;
console.log("100 / 4 = " + 100 / 4)

// Strings

"Hello world!";
console.log("A String printing On Console: " + ("Hello world!"));

var numberNine = 9;
var stringNine = "9";

console.log ("numberNine + stringNine = " + numberNine + stringNine)

var greeting = "Hello ";
var myName = "Nick";
console.log(greeting + myName)

//How many Letters in a word

var java = "Java"
console.log("How many Letters in the word Java? = " + "java".length);
var script = "Script";
console.log("How many Letters in the word Script? = " + "Script".length);
var Javascript = java + script 
console.log("How many Letters in the word Javascript? = " + "javascript".length);

//Getting a Single Character

var myName = "Nick";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);

var codeWord1 = "aRe";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
console.log("Hidden word by selecting one letter from each word: " + codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

var longString = "My long string is long";
console.log("Cutting long sentences to words we want to use: " + longString.slice(3, 14));


// Boleans

var javascriptIsCool = true;
console.log ("Is java script Cool? " + javascriptIsCool);

var hadShower = true;
var hasBackpack = false;
console.log("Did I have a shower and my backpack?" + (hadShower && hasBackpack));

var hadShower = true;
var hasBackpack = true;

console.log("Did I have a shower and my backpack? " + (hadShower && hasBackpack));

// Changing Strings to all Capital Letters

var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
firstCharacterUpper + restOfString;



