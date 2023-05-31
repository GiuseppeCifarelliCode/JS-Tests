// OBJECT
// How to declare an object (Objects can have different key with different value: string, number, array, other object, etc)
const person = {
    name : "Giuseppe", //string
    age : 28, //number
    clothes : ["tShirt","trousers"], //array
}
console.log(person)

// How to call an object key
console.log(person.name) // --> dot notation (most used)
// console.log(person["name"]) --> Square brackets notation

// How to delete ad object key
delete person.name

// How to create a new object key
person.lastName = "Cifarelli"
console.log(person)

// ARRAY
// How to declare an array
const myArray = [1, 2, 3, "Giuseppe"] // You can have array of number, string or mixed
console.log(myArray)

// How to call an array element
// An array element is called by his index starting from 0 for the first element
console.log("This is my third element of the Array", myArray[2])

// How to calculate length of an array
let maxLength = myArray.length

// How to reorder alphabetically an array
//myArray.sort() --> This works only for string's array

// How to create a new element into an array
myArray.push("Cifarelli", 4) // This push one or more values inside the array as last elements

// How to delete an element inside an array
myArray.pop() // This delete the last element of the array

// IF-ELSE
let age = 15
if (age < 18){
    console.log("You can't vote")
} else {
    console.log("You can vote")
}

// TERNARY OPERATOR
let vote = (age < 18) ? "You can't vote" : "You can vote" // If the condition is true play the first instruction, else play the last one
console.log(vote)

// SWITCH-CASE
// Switch-case is another way to verify some conditions like IF-ELSE
switch(age){ // This switch verify the equality between switch condition and case condition
    case 15: 
        console.log("You can't vote")
        break
    case 16:
        console.log("You can't vote")
        break
    case 17:
        console.log("You can't vote")
        break
    case 18:
        console.log("You can vote")
        break
    default:
        console.log("We don't have enough information") // This switch doesn't cover all possible cases
}

switch(true){ // This switch verify the truth of the case condition
    case age < 18 :
        console.log("You can't vote")
        break
    case age >= 18 :
        console.log("You can vote")
}

// WHILE
// While is a cycle that repeat the same instructions n times
let i = 0
while (i < myArray.length){ // This cycle myArray until the end and console.log the element in that index
    // console.log(myArray[i])
    i++
}

// FOR
// For is the best way to write a cycle
for( let i = 0; i < myArray.length; i++){ // This is the same exercise as above
    console.log(myArray[i])
}
// For is used to explore an array until its last element and can be used to explore an array of objects too
const animal = [
    {
        name: "Django",
        species: "Dog",
        age: 2,
        furColor: "Black n white"
    },
    {
        name: "Poppy",
        species: "Cat",
        age: 5,
        furColor: "Orange"
    }
]
for (let i = 0; i < animal.length; i++){ // This explore my animal's array and console.log just their name ad species
    console.log(animal[i].name, animal[i].species)
}