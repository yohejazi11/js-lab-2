
/*
 * Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code


/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */




function AnimalFoodChain(eatsPlants, eatsAnimals) {
    let animle = null;
    (eatsPlants) ? animle = "herbivore" : "";
    (eatsAnimals) ? animle = "carnivore" : "";
    (eatsAnimals && eatsPlants) ? animle = "omnivore" : "";

    let result = `( ${eatsPlants},${eatsAnimals}, ${animle} )`;
    return result;
}

console.log(AnimalFoodChain(true, false));

console.log(AnimalFoodChain(true, true));

console.log(AnimalFoodChain(false, true));


/*
Musical groups have special names based on the number of people in the group.

For example, a "quartet" is a musical group with four musicians. Barbershop quartets(opens in a new tab) were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

Directions:
Write a series of conditional statements that:

Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4
 
 /*
 * REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */

// change the value of `musicians` to test your conditional statements
var musicians = 5;

// change the value of `musicians` to test your conditional statements

if (musicians <= 0) {
    console.log("not a group");
}
else if (musicians == 1) {
    console.log("solo");

}
else if (musicians == 2) {
    console.log("duet");

}
else if (musicians == 3) {
    console.log("trio");

}
else if (musicians == 4) {
    console.log("quartet");


}
else if (musicians > 4) {
    console.log("this is a large group");

}



var room = "billiards room";


var suspect = "Mrs. Sparr";


var weapon = "";
var solved = false;


switch (room) {
    case 'billiards room':
        {
            weapon = "a pool stick";
            if (suspect == "Mrs. Sparr") {
                solved = true;
                if (solved) {
                    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
                }
            }
            else {
                solved = false;
            }
            break;
        }
    case 'ballroom':
        {
            weapon = "poison";
            if (suspect == "Mr. Kalehoff") {
                solved = true;
                if (solved) {
                    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
                }
            }
            else {
                solved = false;
            }
            break;
        }
    case 'gallery room':
        {
            weapon = "trophy";
            if (suspect == "Ms. Van Cleve") {
                solved = true;
                if (solved) {
                    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
                }
            }
            else {
                solved = false;
            }
            break;
        }
    case 'dining room':
        {
            weapon = "knife";
            if (suspect == "Mr. Parkes") {
                solved = true;
                if (solved) {
                    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
                }
            }
            else {
                solved = false;
            }
            break;
        }
}

var balance = -325;
var checkBalance = true;
var isActive = true;

if(checkBalance && balance>0){
    isActive = true;
    console.log("your account in active");
}
else{
    isActive = false;
    console.log("your account in not active");

}

let flavour ="vanilla";
let vessel="bowl";
let toppings="peanuts";
if(flavour =="vanilla" || flavour =="chocolate" && vessel=="cone" || vessel=="bowl" && toppings=="sprinkles" ||toppings=="peanuts"  ){
    console.log(`I'd like two scoops of ${flavour} ice cream in a ${vessel} with ${toppings} .`);

}
