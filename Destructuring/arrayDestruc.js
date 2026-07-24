const arr = ["umair", "khan"];
// const first = arr[0];  according to index position wise 
// const last = arr[1];
const [first, last] = arr;
// console.log(first);  // umair

// now i dont have an array i have string how do we convert to array then destructure it.
const [start, end] = "Umair khan".split(" ");  // this splitt will make "Umair" "khan" then convert internally to arr
// console.log(start);

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

