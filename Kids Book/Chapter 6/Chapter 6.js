//If Statements

let surname = "Nicholas";
console.log ("Hello "  + surname); 
if (surname.length > 7) {
console.log("Wow you have a really long name!"); } 
else{
console.log("Your name isnt very long. ");}

// If Else Staments

let lemondChicken = false;
let beefWithBlackBean = true;
let sweetAndSourPork = false;

if (lemondChicken)
{console.log("Great! I'm having lemon and Chicken");
}else if (beefWithBlackBean)
{console.log ("Ok, I will have beef");
}else if(sweetAndSourPork) {
    console.log("Okay, I will have pork");
} else {
    console.log("Well i guess i'll have rice then");
}


//Try it out 


let Me = true;
let dad = false;
let mom = false;

if (Me)
{ console.log ("Hello it's me");
}else if(dad) {
    console.log ("Hi mommy"); 
}else if(mom) {
    console.log ("Hi daddy");
}else {console.log ("Hello Stranger");
}

//While Loops

let sheepCounted = 0;
while (sheepCounted < 30) {
console.log("I have counted" + sheepCounted + "sheep!"); sheepCounted++;
}
console.log ("Zzzzzzzzzzzzzzzz"); 

//Prevent Infinite Loops

//let count = 10; 
//while (count > 0) {
//alert (count);
  //  count--;
//} alert ("Happy New Year! ");


//For Loop

//for (let count = 10;count > 0; count--) {
//alert (count);
//} alert ("Happy New Year! ");

let sheepNumbers 
for (let sheepNumbers = 0; sheepNumbers < 10; sheepNumbers++) {
    console.log("I have counted " + sheepNumbers + " sheep!");
    }
    console.log("Zzzzzzzzzzz");

    let kenn95
    for (let kenn95 = 0; kenn95 < 5; kenn95++){
        console.log ("5 years later i will be" + kenn95 + "A little old! ");
    }

//let timesToSayHello = 3;
//for (var i = 0; i < timesToSayHello; i++) {
//alert("Hello!");
//}

//let greetMeEveryMorning = 5;
//for (let i = 0; i < greetMeEveryMorning; i++){
//    alert("Good Morning King");
//}


//Using for Loops with Arrays and Strings

let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (let i = 0; i < animals.length; i++) {
console.log("This zoo contains a " + animals[i] + ".");
}

let firstName = "Kenn";

for ( let i = 0;i < firstName.length; i++) {
    console.log ("My name contains the letter " + firstName [i] + "."); 
}

//Other Ways to Use for Loops

for (var x = 10; x < 10000; x = x * 10) {
    console.log(x);
    }

    for (let p = 3; p < 10000; p = p * 3) {
        console.log (p);
    }
    