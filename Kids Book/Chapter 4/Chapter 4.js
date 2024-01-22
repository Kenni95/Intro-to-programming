// Creating An Object 

var cat = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell"
    };

    console.log(cat);
    
    var cat1 = {
        legs: 3,
        "full name": "Harmony Philomena Snuggly-Pants Morgan",
        color: "Tortoiseshell"
        };

        console.log (cat1)

        var cat2 = { legs: 3, name: "Harmony", color: "Tortoiseshell" };
        console.log (cat2);
       

//Accessing Values in Objects

console.log ("Accessing Values in Objects = " +cat2["name"]);

//list of all the keys in an object with Object.key

var dog = { name: "Pancake", age: 6, color: "white", bark: "Yip yap yip!"};

console.log (dog);
console.log(Object.keys(dog));

var cat = { name: "Harmony", age: 8, color: "tortoiseshell" };
console.log (cat);
console.log("List of all keys using Object.key = " + Object.keys(cat));

//Adding Values to Objects
//come back to this part

var cat = {};
cat["legs"] = 5;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";

console.log("Adding Values to Objects = " +cat);

//Adding Keys with Dot Notation

var dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
    };
    dog.isAwesome;
    console.log("Adding keys with dot notation = " + dog.isBrown);

    //Combining Arrays and Objects

    var dinosaurs = [
        { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
        { name: "Stegosaurus", period: "Late Jurassic" },
        { name: "Plateosaurus", period: "Triassic" }
        ];

        console.log("combining arrays and objects = " +dinosaurs[0].period);

        //An array of friends

        var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };

        var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
    
        var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
     

        var friends = [anna, dave, kate];

        console.log(friends);

        console.log(friends[1]);

        console.log(friends[2].name);

        console.log(friends[0].luckyNumbers[1]);

        //Keeping Track of My Money 
        
        var owedMoney = {};
        owedMoney["Jimmy"] = 5;
        owedMoney["Anna"] = 7;
        owedMoney["Jimmy"]; 5
        owedMoney["Jinen"];
        
        console.log("keeping track of money = " +owedMoney);
        console.log(owedMoney["Jimmy"] += 10);
        console.log(owedMoney);

// Storing Information About Your Movies

var movies = {
    "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
    }
    };

    console.log(movies);

    console.log(movies["Finding Nemo"]
.duration);

console.log(movies["Finding Nemo"].actors);

console.log(Object.keys(movies));

var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu-ray"
    };

    console.log(movies["Cars"].duration);