const arr = ["umair", "khan"];
// const first = arr[0];  according to index position wise 
// const last = arr[1];
 const [first, last] = arr;
// console.log(first);  // umair

// now i dont have an array i have string how do we convert to array then destructure it.
const [start, end] = "Umair khan".split(" ");  // this splitt will make "Umair" "khan" then convert internally to arr
// console.log(start); outpot  Umair

const [pehla, , lastwala] = ["umair", "khan", "baluCity", "afghan"];
// console.log(lastwala);   // here the middle one ommited .and last "afghan" ommited because of how we destruct.


const [a, b, c] = "ghj";
// console.log(a);  // g     internally itteration happen and loook magic happen.
// console.log(b);  // h     no need of explixitly use of itteration or loop through.
// console.log(c);  // j


let [one, two, three] = new Set([1, 2, 3]);
// console.log(one);
// console.log(two);
// console.log(three);

// That works, because internally a destructuring assignment 
// works by iterating over the right value. 
// It’s a kind of syntax sugar for calling for..of over the value to 
// the right of = and assigning the values.

// Assign anything on the left.
let user = {};   // here we declared empty further see what will happen

[user.name, user.surname] = "Uzii Abbu".split(" "); // same as like before split make it cut and convert to array
// console.log(user.name);
// console.log(user.surname);

// ***
// looping with .entries() of an obj
const object = {
    name: "umair",
    age: 90,
    class: "selfTaught"
};
// for(let [key, value] of Object.entries(object)){  // here three iteration happen one for name  = value
//     // console.log(`${key} = ${value}`)               // second itteration for age = value third for class = value
// };                   output :   name=umair age=90 class=selfTaught


//  itteration by Map

let object2 = new Map();   // this will make an object with extra capabilities then we can easily set key value 
object2.set("name", "Uzzi");  // in an object by help of set();
object2.set("age", "67");
// for(let [key, value] of object2){
//     console.log(`${key} = ${value}`)  // output name=Uzzi   age=67
// }

// in each itteration object2 give us name keep it in name and second itteration get age keep it in age..

// *****

// SWAP VARIABLES TRICK
// There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let first = "Umair";
let last = "rehman";
[first, last] = [last, first]
console.log(first);  // rehman

// Here we create a temporary array of two variables and immediately destructure it in swapped order.
// We can swap more than two variables this way.


let game = "start";
let player = "khan";
[game, player] = [player, game];
console.log(game) // khan
// SWAPPP  
// here we create a temporary array of two variables and immediately destructure it in swapped order.

// We can swap more than two variables this way.


// *** ...REST      OPERATOR

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1) // julius
console.log(name2) // ceaser
// other omited.

// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


// The value of rest is the array of the remaining array elements.
let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]


// Default values
// If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:

let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
If we want a “default” value to replace the missing one, we can provide it using =:

let [bhara, chota] = ["khan"];
let [bhara = "khannn", chota = "anonymous"] = ["khan"];
console.log(bhara) // khan
console.log(chota) // anonymous

// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.

// ***
// For instance, here we use the prompt function for two defaults:
let [name = prompt("name?"), surname=prompt("surname?")] = ["umair"];
console.log(name) // umair
console.log(surname) // prompyt appear your wish whcih one youbwana add
